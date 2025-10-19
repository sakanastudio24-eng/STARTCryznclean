"use client";

import React from "react";
import { isZipInRange } from "@/lib/serviceArea";
import { SETMORE_URL } from "@/lib/config";

export default function ZipChecker() {
  const [zip, setZip] = React.useState("");
  const [validated, setValidated] = React.useState<null | boolean>(null);

  function validate() {
    const ok = isZipInRange(zip);
    setValidated(ok);
  }

  const showInRange = validated === true;
  const showOutOfRange = validated === false;

  return (
    <section className="card p-4 sm:p-6">
      <h3 className="text-lg font-semibold mb-2">Service area check</h3>
      <div className="flex gap-2">
        <input
          type="text"
          inputMode="numeric"
          pattern="\\d{5}"
          maxLength={5}
          placeholder="Enter ZIP"
          className="flex-1 bg-white/5 border border-white/10 rounded-md px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A3D]"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          aria-label="ZIP code"
        />
        <button type="button" className="btn btn-primary" onClick={validate}>
          Check
        </button>
      </div>

      {showInRange && (
        <div className="mt-3 p-3 rounded-md border border-white/10">
          <p className="text-sm">You're in our service area!</p>
          <a
            href={SETMORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-2 inline-block"
          >
            See available times
          </a>
        </div>
      )}

      {showOutOfRange && (
        <div className="mt-3 p-3 rounded-md border border-white/10">
          <p className="text-sm text-muted-foreground">
            You’re a bit outside our usual route—submit a quick quote and we’ll
            confirm travel options/fee.
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <a href="/request?pkg=quote" className="btn btn-secondary">Request a Quote</a>
            <a
              href={SETMORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              See available times
            </a>
          </div>
        </div>
      )}

      <p className="mt-3 text-xs text-muted-foreground">
        We’ll never block booking based on ZIP. If you’re out-of-range,
        we’ll confirm any travel fee before the appointment.
      </p>
    </section>
  );
}
