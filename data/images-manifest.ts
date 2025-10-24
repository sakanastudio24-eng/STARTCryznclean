
// Image manifest for hero and gallery images
// Each entry: { file, alt, caption, category, orientation, pairId? }

export type ImageCategory = "Exterior" | "Interior" | "Ceramic" | "Specialty";
export type ImageOrientation = "landscape" | "portrait" | "square";

export interface GalleryImage {
  file: string; // relative to /public/images/hero or /public/images/gallery
  alt: string;
  caption: string;
  category: ImageCategory;
  orientation: ImageOrientation;
  pairId?: string;
}

export const heroImages: GalleryImage[] = [
  {
    file: "about-hero.jpg",
    alt: "Clean car exterior with water beading",
    caption: "Ceramic coating in action",
    category: "Ceramic",
    orientation: "landscape",
  },
  // Add more hero images as needed
];

export const galleryImages: GalleryImage[] = [
  {
    file: "gallery/before-1.svg",
    alt: "Exterior wash and wax transformation - Before",
    caption: "Exterior transformation - Before",
    category: "Exterior",
    orientation: "landscape",
    pairId: "ex1",
  },
  {
    file: "gallery/after-1.svg",
    alt: "Exterior wash and wax transformation - After",
    caption: "Exterior transformation - After",
    category: "Exterior",
    orientation: "landscape",
    pairId: "ex1",
  },
  {
    file: "gallery/before-2.svg",
    alt: "Interior deep clean and detailing - Before",
    caption: "Interior transformation - Before",
    category: "Interior",
    orientation: "landscape",
    pairId: "in1",
  },
  {
    file: "gallery/after-2.svg",
    alt: "Interior deep clean and detailing - After",
    caption: "Interior transformation - After",
    category: "Interior",
    orientation: "landscape",
    pairId: "in1",
  },
  {
    file: "gallery/before-3.svg",
    alt: "Paint restoration and correction - Before",
    caption: "Paint restoration - Before",
    category: "Exterior",
    orientation: "landscape",
    pairId: "paint1",
  },
  {
    file: "gallery/after-3.svg",
    alt: "Paint restoration and correction - After",
    caption: "Paint restoration - After",
    category: "Exterior",
    orientation: "landscape",
    pairId: "paint1",
  },
  // Add more images as needed
];
