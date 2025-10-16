export const SITE = {
  name: "Project Name",
  domain: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3002",
} as const;

export const SETMORE_URL =
  process.env.NEXT_PUBLIC_SETMORE_URL ||
  "https://sakanastudiollc.setmore.com/zechariah";

export const ENV_LABEL =
  process.env.NEXT_PUBLIC_ENV_LABEL || "Dev";
