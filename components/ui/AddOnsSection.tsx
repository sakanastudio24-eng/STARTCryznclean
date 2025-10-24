"use client";

import React from "react";
// Use a relative import so it works without TS path aliases.
// Adjust the path if your pricing file lives elsewhere.
import { ADDONS } from "../../data/pricing";

type AddOn = {
  id: string;
  name: string;
  price: number;
  description?: string;
  icon?: React.ReactNode;
  enabled?: boolean;
};

type Props = {
  /** If omitted, falls back to ADDONS from pricing */
  addons?: AddOn[];
};

export default function AddOnsSection({ addons }: Props) {
  const list = (addons && addons.length ? addons : ADDONS).filter(a => a.enabled !== false);

  if (!list.length) {
    return null;
  }

  return (
    <div aria-label="Available add-on services" className="space-y-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Add-ons</h2>
          <p className="text-slate-600">Customize your detail with these extras.</p>
        </div>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
        {list.map((add) => (
          <li key={add.id}>
            <div className="h-full rounded-xl border border-slate-200 bg-white p-4 flex flex-col justify-between">
              <div className="flex items-start gap-3">
                <div className="mt-0.5" aria-hidden="true">
                  {add.icon ?? <span className="inline-block w-5 h-5 rounded bg-primary/10" />}
                </div>
                <div className="min-w-0">
                  <h3 className="text-slate-900 font-semibold">{add.name}</h3>
                  {add.description && (
                    <p className="text-slate-600 text-sm">{add.description}</p>
                  )}
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <div className="text-slate-900 font-semibold">${add.price}</div>
                <button
                  type="button"
                  className="btn-small inline-flex items-center justify-center rounded-md border border-primary text-primary px-3 py-2 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 transition"
                  aria-label={"Add " + add.name + " add-on to cart"}
                >
                  Add
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
