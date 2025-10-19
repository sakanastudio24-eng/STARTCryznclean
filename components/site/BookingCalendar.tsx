"use client";

import React from "react";

type BookingCalendarProps = {
  busyDates?: string[]; // YYYY-MM-DD
  value?: string; // ISO date (YYYY-MM-DD)
  onChange?: (iso: string) => void;
};

const DAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;

function startOfMonth(date: Date): Date {
  const d = new Date(date);
  d.setDate(1);
  d.setHours(0, 0, 0, 0);
  return d;
}

function endOfMonth(date: Date): Date {
  const d = new Date(date);
  d.setMonth(d.getMonth() + 1);
  d.setDate(0);
  d.setHours(0, 0, 0, 0);
  return d;
}

function formatISODate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function isSameDay(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function addDays(date: Date, days: number): Date {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

export default function BookingCalendar({ busyDates, value, onChange }: BookingCalendarProps) {
  const [monthCursor, setMonthCursor] = React.useState<Date>(() => {
    const base = value ? new Date(value) : new Date();
    base.setDate(1);
    base.setHours(0, 0, 0, 0);
    return base;
  });
  const [selected, setSelected] = React.useState<string | undefined>(value);
  const [busy, setBusy] = React.useState<Set<string>>(new Set(busyDates));

  const prefersReduced = React.useMemo(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  // Fetch busy dates from API on mount if not provided
  React.useEffect(() => {
    let isMounted = true;
    async function load() {
      try {
        const res = await fetch("/api/freebusy", { cache: "no-store" });
        if (!res.ok) return;
        const data = await res.json();
        if (isMounted && Array.isArray(data.busy)) {
          setBusy(new Set(data.busy));
        }
      } catch {}
    }
    if (!busyDates) load();
    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sync when prop changes
  React.useEffect(() => {
    if (busyDates) setBusy(new Set(busyDates));
  }, [busyDates]);

  const today = React.useMemo(() => {
    const t = new Date();
    t.setHours(0, 0, 0, 0);
    return t;
  }, []);

  const monthStart = startOfMonth(monthCursor);
  const monthEnd = endOfMonth(monthCursor);
  const startOffset = monthStart.getDay(); // 0 Sun .. 6 Sat
  const daysInMonth = monthEnd.getDate();
  const totalCells = Math.ceil((startOffset + daysInMonth) / 7) * 7; // full weeks

  const days: Date[] = React.useMemo(() => {
    const firstCell = addDays(monthStart, -startOffset);
    return Array.from({ length: totalCells }, (_, i) => addDays(firstCell, i));
  }, [monthStart, startOffset, totalCells]);

  const handleSelect = (iso: string, disabled: boolean) => {
    if (disabled) return;
    setSelected(iso);
    onChange?.(iso);
  };

  const monthFormatter = React.useMemo(() => new Intl.DateTimeFormat(undefined, { month: "long", year: "numeric" }), []);

  return (
    <section aria-label="Booking calendar" className="card p-4 sm:p-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold">{monthFormatter.format(monthStart)}</h3>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setMonthCursor(addDays(monthCursor, -1 * monthStart.getDate()))}
            aria-label="Previous month"
          >
            ‹
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setMonthCursor(addDays(monthEnd, 1))}
            aria-label="Next month"
          >
            ›
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 text-center text-sm text-muted-foreground mb-1">
        {DAY_LABELS.map((label) => (
          <div key={label} className="py-1" aria-hidden>
            {label}
          </div>
        ))}
      </div>
      <div
        className={
          prefersReduced
            ? "grid grid-cols-7 gap-1"
            : "grid grid-cols-7 gap-1 transition duration-fast"
        }
      >
        {days.map((d, idx) => {
          const inCurrentMonth = d.getMonth() === monthStart.getMonth();
          const iso = formatISODate(d);
          const isPast = d < today && !isSameDay(d, today);
          const isBusy = busy.has(iso);
          const isSelected = selected === iso;
          const isToday = isSameDay(d, today);
          const disabled = !inCurrentMonth || isPast;

          const baseBtn =
            "relative h-10 sm:h-11 w-10 sm:w-11 rounded-md flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[" +
            "#FF6A3D]"; // brand ring color per tokens

          const stateClasses = [
            inCurrentMonth ? "text-white" : "text-white/40",
            disabled ? "opacity-40 cursor-not-allowed" : "hover:opacity-90 cursor-pointer",
            isSelected ? "bg-primary" : "bg-white/5 border border-white/10",
          ].join(" ");

          return (
            <button
              key={idx}
              type="button"
              role="gridcell"
              aria-selected={isSelected}
              aria-label={d.toDateString()}
              tabIndex={disabled ? -1 : 0}
              disabled={disabled}
              className={`${baseBtn} ${stateClasses}`}
              onClick={() => handleSelect(iso, disabled)}
            >
              <span className="text-sm font-medium">{d.getDate()}</span>
              {isToday && (
                <span className="absolute -top-1 -right-1 text-[10px] px-1 rounded bg-accent text-charcoal">Today</span>
              )}
              {isBusy && <span className="absolute bottom-1 w-1.5 h-1.5 rounded-full bg-accent" />}
            </button>
          );
        })}
      </div>
      <p className="mt-3 text-sm text-muted-foreground">
        Selecting a date helps us plan; we’ll confirm exact timing.
      </p>
    </section>
  );
}
