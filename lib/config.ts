export const SITE = {
  name: "Cruiz n Clean",
  domain: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3003",
} as const;

export const SETMORE_URL =
  process.env.NEXT_PUBLIC_SETMORE_URL ||
  "https://sakanastudiollc.setmore.com/zechariah";

export const ENV_LABEL =
  process.env.NEXT_PUBLIC_ENV_LABEL || "Dev";

export const BRAND = { primary: "#FF6A3D" } as const;

/**
 * Maximum number of vehicles allowed per booking
 */
export const MAX_CARS_PER_BOOKING = 3;
