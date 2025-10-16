"use client";

export function trackEvent(event: string, payload?: Record<string, unknown>) {
  try {
    // no-op placeholder; integrate with real analytics later
    // eslint-disable-next-line no-console
    console.debug("trackEvent", event, payload);
  } catch {}
}
