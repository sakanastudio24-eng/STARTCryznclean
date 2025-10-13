
// Service catalog: id, title, basePrice (car), category
export const services = [
  // Exterior
  { id: 'ext-wash-dry', title: 'Wash & Dry', basePrice: 50, category: 'Exterior' },
  { id: 'ext-tire-dressing', title: 'Tire Dressing', basePrice: 20, category: 'Exterior' },
  { id: 'ext-sealant-1mo', title: '1-Month Sealant', basePrice: 60, category: 'Exterior' },
  { id: 'ext-sealant-3mo', title: '3-Month Sealant', basePrice: 90, category: 'Exterior' },
  { id: 'ext-sealant-6mo', title: '6-Month Sealant', basePrice: 120, category: 'Exterior' },
  { id: 'ext-clay-bar', title: 'Clay Bar', basePrice: 100, category: 'Exterior' },
  { id: 'ext-iron-decon', title: 'Iron Decon', basePrice: 120, category: 'Exterior' },
  { id: 'ext-plastic-restore', title: 'Plastic Restoration', basePrice: 80, category: 'Exterior' },

  // Interior
  { id: 'int-steam-clean', title: 'Steam Clean & Wipe Down', basePrice: 60, category: 'Interior' },
  { id: 'int-vacuum-full', title: 'Vacuum Full', basePrice: 50, category: 'Interior' },
  { id: 'int-odor-light', title: 'Light Odor Removal', basePrice: 40, category: 'Interior' },
  { id: 'int-odor-deep', title: 'Deep Odor Removal', basePrice: 70, category: 'Interior' },
  { id: 'int-stain-care', title: 'Stain Care', basePrice: 60, category: 'Interior' },
  { id: 'int-leather-uv', title: 'Leather/Vinyl UV Protectant', basePrice: 50, category: 'Interior' },
  { id: 'int-mat-restore', title: 'Mat Restoration', basePrice: 40, category: 'Interior' },
  { id: 'int-door-jambs', title: 'Door Jambs', basePrice: 30, category: 'Interior' },
  { id: 'int-scent', title: 'Complimentary Scent', basePrice: 0, category: 'Interior' },

  // Ceramic
  { id: 'ceramic-enhance', title: 'Enhancement 3–6mo', basePrice: 129, category: 'Ceramic' },
  { id: 'ceramic-premium', title: 'Premium 6mo', basePrice: 199, category: 'Ceramic' },

  // Specialty
  { id: 'spec-headlight', title: 'Headlight Restoration', basePrice: 75, category: 'Specialty' },
  { id: 'spec-engine-bay', title: 'Engine Bay Detail', basePrice: 80, category: 'Specialty' },
  { id: 'spec-paint-correction', title: '1–3 Step Paint Correction', basePrice: 300, category: 'Specialty' },
  { id: 'spec-alum-wheel', title: 'Aluminum Wheel Polish', basePrice: 100, category: 'Specialty' },
  { id: 'spec-acid-wash', title: 'Acid Wash', basePrice: 100, category: 'Specialty' },
];

// Use size multipliers for SUVs/trucks: 1.0 (car), 1.15 (smallSUV), 1.3 (largeSUVTruck)
