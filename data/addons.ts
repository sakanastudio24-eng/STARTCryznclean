/**
 * Add-ons Data Module
 * 
 * Additional services that can be added to any package.
 * Prices are fixed regardless of vehicle size.
 */

export interface Addon {
  id: string;
  name: string;
  price: number;
  description?: string;
}

export const ADDONS: Addon[] = [
  {
    id: "engine_bay",
    name: "Engine Bay Clean",
    price: 45,
    description: "Deep clean and degrease of engine compartment"
  },
  {
    id: "headlight_rest",
    name: "Headlight Restoration",
    price: 60,
    description: "Restore clarity to foggy or yellowed headlights"
  },
  {
    id: "odor_treat",
    name: "Odor Treatment",
    price: 40,
    description: "Eliminate odors with professional treatment"
  },
  {
    id: "pet_hair",
    name: "Pet Hair Removal",
    price: 35,
    description: "Thorough removal of embedded pet hair"
  },
  {
    id: "seat_shampoo",
    name: "Seat Shampoo",
    price: 65,
    description: "Deep clean and shampoo all seats"
  },
  {
    id: "floor_shampoo",
    name: "Floor Mat Shampoo",
    price: 30,
    description: "Deep clean and shampoo all floor mats"
  },
  {
    id: "trim_restore",
    name: "Exterior Trim Restore",
    price: 40,
    description: "Restore faded plastic and rubber trim"
  },
  {
    id: "wheel_detail",
    name: "Wheel Deep Clean",
    price: 35,
    description: "Detailed cleaning of wheels, brake dust removal"
  },
];

/**
 * Get an addon by ID
 */
export function getAddonById(id: string): Addon | undefined {
  return ADDONS.find(addon => addon.id === id);
}

/**
 * Calculate total price for selected addons
 */
export function calculateAddonsTotal(addonIds: string[]): number {
  return addonIds.reduce((total, id) => {
    const addon = getAddonById(id);
    return total + (addon?.price || 0);
  }, 0);
}

/**
 * Get addons by IDs
 */
export function getAddonsByIds(ids: string[]): Addon[] {
  return ids.map(id => getAddonById(id)).filter((addon): addon is Addon => addon !== undefined);
}

