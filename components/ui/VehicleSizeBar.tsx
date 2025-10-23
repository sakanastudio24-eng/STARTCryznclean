'use client';
import { useRouter, useSearchParams } from 'next/navigation';

const SIZES = [
  { key: 'sm', label: 'Small' },
  { key: 'md', label: 'Mid-Size' },
  { key: 'lg', label: 'Large/SUV' },
];

export default function VehicleSizeBar() {
  const router = useRouter();
  const params = useSearchParams();
  const current = params.get('size') || 'md';

  const setSize = (key: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set('size', key);
    router.push(url.pathname + '?' + url.searchParams.toString());
  };

  return (
    <div className="w-full bg-surface border border-slate-200 rounded-xl p-2 mb-6">
      <div className="flex flex-wrap gap-2">
        {SIZES.map(s => (
          <button
            key={s.key}
            onClick={() => setSize(s.key)}
            aria-label={`Select ${s.label} vehicle size`}
            aria-pressed={current === s.key}
            className={`px-4 py-2 rounded-md text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2
              ${current === s.key
                ? 'bg-primary text-white'
                : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50'}`}
          >
            {s.label}
          </button>
        ))}
      </div>
    </div>
  );
}

