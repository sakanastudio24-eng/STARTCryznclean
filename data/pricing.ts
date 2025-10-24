/**
 * Pricing Data - Single Source of Truth
 * 
 * All package prices and vehicle size multipliers are defined here.
 */

export type VehicleSize = "compact" | "sedan" | "suv" | "truck_van";

export const SIZE_MULTIPLIER: Record<VehicleSize, number> = {
  compact: 1.0,
  sedan: 1.1,
  suv: 1.25,
  truck_van: 1.4,
};

export const SIZE_LABELS: Record<VehicleSize, string> = {
  compact: "Compact",
  sedan: "Sedan",
  suv: "SUV",
  truck_van: "Truck/Van",
};

export interface Package {
  id: string;
  name: string;
  base: number;
  summary: string;
  features?: string[];
}

export type AddOn = {
  id: string;
  name: string;
  price: number;        // flat price, no size multiplier
  description: string;
  icon?: string;        // lucide-react icon name (string)
  enabled?: boolean;    // default true
};

export const PACKAGES: Package[] = [
  {
    id: "express",
    name: "Express Wash",
    base: 60,
    summary: "A wash for drivers who care about routine maintenance.",
    features: [
      "Exterior hand wash",
      "Wheel cleaning",
      "Tire shine",
      "Quick interior vacuum"
    ]
  },
  {
    id: "standard",
    name: "Standard Detail",
    base: 140,
    summary: "Great for monthly upkeep and daily drivers.",
    features: [
      "Complete exterior wash & wax",
      "Interior deep vacuum",
      "Dashboard & console cleaning",
      "Window cleaning (inside & out)",
      "Door jambs cleaning"
    ]
  },
  {
    id: "premium",
    name: "Premium Detail",
    base: 220,
    summary: "For meticulous owners who want a deep refresh.",
    features: [
      "Everything in Standard",
      "Clay bar treatment",
      "Paint sealant application",
      "Leather conditioning",
      "Engine bay cleaning",
      "Headlight restoration"
    ]
  },
];

/**
 * Calculate the price for a package at a given vehicle size
 */
export function calculatePrice(basePrice: number, size: VehicleSize): number {
  return Math.round(basePrice * SIZE_MULTIPLIER[size]);
}

/**
 * Get a package by ID
 */
export function getPackageById(id: string): Package | undefined {
  return PACKAGES.find(pkg => pkg.id === id);
}

/**
 * Calculate price for a package ID at a given vehicle size
 */
export function priceFor(pkgId: string, size: VehicleSize): number {
  const pkg = getPackageById(pkgId);
  if (!pkg) return 0;
  return Math.round(pkg.base * SIZE_MULTIPLIER[size]);
}

export const ADDONS: AddOn[] = [
  { id: "engine-bay",       name: "Engine Bay Clean",  price: 45, description: "Degrease & wipe plastics",      icon: "Wrench", enabled: true },
  { id: "headlight-restore",name: "Headlight Restore", price: 60, description: "Polish & UV protect",           icon: "SunMedium", enabled: true },
  { id: "odor-removal",     name: "Odor Removal",      price: 50, description: "Targeted ozone treatment",      icon: "Wind", enabled: true },
  { id: "pet-hair",         name: "Pet Hair Removal",  price: 35, description: "Intensive extraction",          icon: "Scissors", enabled: true },
  { id: "wheel-detail",     name: "Wheel Detail",      price: 40, description: "Iron decon & tire shine",       icon: "Cog", enabled: true },
  { id: "glass-coat",       name: "Glass Hydrophobic", price: 45, description: "Rain-repellent on all glass",   icon: "Droplets", enabled: true },
  { id: "clay-bar",         name: "Clay Bar",          price: 65, description: "Surface decontamination",       icon: "Cube", enabled: true },
  // Paint correction intentionally omitted (owner not ready yet)
];

export const ADDONS_ENABLED = true;

