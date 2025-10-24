import { VehicleSize, SIZE_MULTIPLIER } from "../data/pricing";

/**
 * Format price as currency string
 */
export function formatPrice(price: number): string {
  return `$${price}`;
}

/**
 * Compute current price based on base price and vehicle size
 */
export function computeCurrentPrice(base: number, size: VehicleSize): number {
  return Math.round(base * SIZE_MULTIPLIER[size]);
}

/**
 * Compute compare-at price (only shown if greater than current)
 * For now, we'll use the base price as compare-at for larger sizes
 */
export function computeCompareAt(base: number, size: VehicleSize): number | null {
  // Only show compare-at for larger sizes when they're more expensive than base
  const current = computeCurrentPrice(base, size);
  if (current > base) {
    return base; // Show base price as compare-at
  }
  return null; // No compare-at to show
}


