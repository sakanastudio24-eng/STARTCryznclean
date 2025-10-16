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
          <span className={`rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg border-2 ${i === step ? "bg-brand text-white border-brand" : "bg-white text-brand border-brand/40"}`}>{i + 1}</span>
          <span className={`text-base font-medium ${i === step ? "text-brand" : "text-muted-foreground"}`}>{label}</span>
          {i < steps.length - 1 && <span className="w-8 h-1 bg-brand/20 rounded" />}
        </div>
      ))}
    </nav>
  );
}
