import { PACKAGES, VehicleSize, SIZE_MULTIPLIER } from "../data/pricing";

/**
 * Compute the current price for a package at a given vehicle size
 */
export function computeCurrentPrice(basePrice: number, size: VehicleSize): number {
  return Math.round(basePrice * SIZE_MULTIPLIER[size]);
}

/**
 * Compute the compare-at price (usually higher for showing discounts)
 */
export function computeCompareAt(basePrice: number, size: VehicleSize): number {
  // Add 20% to show as "compare at" price
  return Math.round(basePrice * SIZE_MULTIPLIER[size] * 1.2);
}

/**
 * Format a price as currency
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}