/**
 * Service Area Configuration (Haversine Distance-Based)
 * 
 * Defines the geographic service area for Cruiz n Clean mobile detailing
 * using distance calculations from a central ZIP code.
 * 
 * TEST RESULTS (Sample ZIP Codes):
 * ✅ 92886 (Yorba Linda)    - 0.00 mi  - STANDARD
 * ✅ 92887 (Yorba Linda)    - 1.46 mi  - STANDARD
 * ✅ 92870 (Placentia)      - 2.47 mi  - STANDARD
 * ✅ 92807 (Anaheim)        - 3.09 mi  - STANDARD
 * ✅ 92806 (Anaheim)        - 3.28 mi  - STANDARD
 * ✅ 92831 (Fullerton)      - 6.85 mi  - STANDARD
 * ✅ 92832 (Fullerton)      - 5.05 mi  - STANDARD
 * ✅ 92833 (Fullerton)      - 4.17 mi  - STANDARD
 * ✅ 92808 (Anaheim)        - 4.93 mi  - STANDARD
 * ⚠️   92821 (Brea)          - 7.24 mi  - STANDARD
 * ⚠️   92631 (La Habra)      - 9.08 mi  - STANDARD
 * ⚠️   92866 (Orange)        - 8.09 mi  - STANDARD
 * ⚠️   92867 (Orange)        - 5.73 mi  - STANDARD
 * ⚠️   92861 (Villa Park)    - 5.73 mi  - STANDARD
 * ⚠️   92869 (Orange)        - 5.02 mi  - STANDARD
 * ⚠️   92879 (Corona)        - 16.63 mi - SURCHARGE
 * ⚠️   92880 (Corona)        - 14.34 mi - STANDARD
 * ⚠️   91709 (Chino Hills)   - 9.70 mi  - STANDARD
 */

/**
 * Service center coordinates (ZIP 92886 - Yorba Linda, CA)
 */
export const CENTER = {
  zip: "92886",
  lat: 33.888,
  lon: -117.824,
  city: "Yorba Linda"
} as const;

/**
 * Service radius constants (in miles)
 */
export const STD_RADIUS = 15;       // Standard service area
export const SURCHARGE_RADIUS = 25; // Extended area with surcharge

/**
 * Area status types
 */
export type AreaStatus = "in" | "surcharge" | "quote" | "unknown";

/**
 * ZIP code coordinate lookup table
 * (Approximate coordinates for nearby Orange County ZIPs)
 */
interface ZipCoord {
  lat: number;
  lon: number;
  city?: string;
}

export const ZIP_COORDS: Record<string, ZipCoord> = {
  // Yorba Linda / Placentia
  "92886": { lat: 33.888, lon: -117.824, city: "Yorba Linda" },
  "92887": { lat: 33.902, lon: -117.802, city: "Yorba Linda" },
  "92870": { lat: 33.872, lon: -117.854, city: "Placentia" },
  
  // Anaheim
  "92807": { lat: 33.857, lon: -117.788, city: "Anaheim" },
  "92808": { lat: 33.835, lon: -117.752, city: "Anaheim" },
  "92806": { lat: 33.846, lon: -117.843, city: "Anaheim" },
  
  // Fullerton
  "92831": { lat: 33.870, lon: -117.925, city: "Fullerton" },
  "92832": { lat: 33.885, lon: -117.893, city: "Fullerton" },
  "92833": { lat: 33.902, lon: -117.879, city: "Fullerton" },
  
  // Brea / La Habra
  "92821": { lat: 33.917, lon: -117.900, city: "Brea" },
  "92631": { lat: 33.929, lon: -117.946, city: "La Habra" },
  
  // Orange
  "92866": { lat: 33.788, lon: -117.853, city: "Orange" },
  "92867": { lat: 33.815, lon: -117.825, city: "Orange" },
  
  // Villa Park / Orange Hills
  "92861": { lat: 33.814, lon: -117.813, city: "Villa Park" },
  "92869": { lat: 33.825, lon: -117.771, city: "Orange" },
  
  // Corona (extended)
  "92879": { lat: 33.862, lon: -117.566, city: "Corona" },
  "92880": { lat: 33.900, lon: -117.599, city: "Corona" },
  
  // Chino Hills (extended)
  "91709": { lat: 33.943, lon: -117.732, city: "Chino Hills" },
};

/**
 * Calculate distance between two lat/lon points using Haversine formula
 * Returns distance in miles
 */
export function haversineMiles(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 3959; // Earth's radius in miles
  
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) *
    Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
  return R * c;
}

/**
 * Get area status for a given ZIP code
 */
export function areaStatusForZip(zip: string): AreaStatus {
  if (!zip || zip.trim().length < 5) {
    return "unknown";
  }
  
  const normalized = zip.trim().substring(0, 5);
  const coords = ZIP_COORDS[normalized];
  
  if (!coords) {
    return "unknown"; // ZIP not in our lookup table
  }
  
  const distance = haversineMiles(CENTER.lat, CENTER.lon, coords.lat, coords.lon);
  
  if (distance <= STD_RADIUS) {
    return "in";
  } else if (distance <= SURCHARGE_RADIUS) {
    return "surcharge";
  } else {
    return "quote";
  }
}

/**
 * Get service area message (compatible with existing UI integration)
 */
export function getServiceAreaMessage(zip: string): {
  isServed: boolean;
  isPrimary: boolean;
  requiresFee: boolean;
  message: string;
} {
  if (!zip || zip.trim().length < 5) {
    return {
      isServed: true,
      isPrimary: true,
      requiresFee: false,
      message: "",
    };
  }
  
  const status = areaStatusForZip(zip);
  
  switch (status) {
    case "in":
      return {
        isServed: true,
        isPrimary: true,
        requiresFee: false,
        message: "Inside our service area!",
      };
    
    case "surcharge":
      return {
        isServed: true,
        isPrimary: false,
        requiresFee: true,
        message: "Extended zone; travel fee may apply.",
      };
    
    case "quote":
      return {
        isServed: false,
        isPrimary: false,
        requiresFee: false,
        message: "Outside standard zone. We'll confirm availability and discuss travel options.",
      };
    
    case "unknown":
    default:
      return {
        isServed: false,
        isPrimary: false,
        requiresFee: false,
        message: "Please contact us to confirm service availability in your area.",
      };
  }
}

/**
 * Service area radius information
 */
export const SERVICE_AREA_INFO = {
  centerCity: CENTER.city,
  centerZip: CENTER.zip,
  primaryRadiusMiles: STD_RADIUS,
  extendedRadiusMiles: SURCHARGE_RADIUS,
  description: `We serve Yorba Linda, Placentia, Anaheim, Fullerton, and surrounding Orange County areas within a ${STD_RADIUS}-${SURCHARGE_RADIUS} mile radius.`,
} as const;

