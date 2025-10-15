import React from "react";

interface StepHeaderProps {
  step: number;
  steps: string[];
}

export default function StepHeader({ step, steps }: StepHeaderProps) {
  return (
    <nav className="flex items-center justify-center gap-4 py-6" aria-label="Progress">
      {steps.map((label, i) => (
        <div key={label} className="flex items-center gap-2">
          <span className={`rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm border ${i === step ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900" : "bg-transparent text-current border-subtle"}`}>{i + 1}</span>
          <span className={`text-sm font-medium ${i === step ? "" : "text-muted-foreground"}`}>{label}</span>
          {i < steps.length - 1 && <span className="w-8 h-0.5 bg-zinc-300 dark:bg-zinc-700 rounded" />}
        </div>
      ))}
    </nav>
  );
}
