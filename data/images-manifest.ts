
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
    file: "hero/hero1.jpg",
    alt: "Clean car exterior with water beading",
    caption: "Ceramic coating in action",
    category: "Ceramic",
    orientation: "landscape",
  },
  {
    file: "hero/hero2.jpg",
    alt: "Interior detailing with vacuum",
    caption: "Interior deep clean",
    category: "Interior",
    orientation: "landscape",
  },
  // Add more hero images as needed
];

export const galleryImages: GalleryImage[] = [
  {
    file: "gallery/exterior1.jpg",
    alt: "Before and after exterior wash",
    caption: "Exterior transformation",
    category: "Exterior",
    orientation: "landscape",
    pairId: "ex1",
  },
  {
    file: "gallery/exterior1b.jpg",
    alt: "After exterior wash",
    caption: "After wash",
    category: "Exterior",
    orientation: "landscape",
    pairId: "ex1",
  },
  {
    file: "gallery/interior1.jpg",
    alt: "Interior before cleaning",
    caption: "Interior before",
    category: "Interior",
    orientation: "portrait",
    pairId: "in1",
  },
  {
    file: "gallery/interior1b.jpg",
    alt: "Interior after cleaning",
    caption: "Interior after",
    category: "Interior",
    orientation: "portrait",
    pairId: "in1",
  },
  {
    file: "gallery/ceramic1.jpg",
    alt: "Ceramic coating water beading",
    caption: "Ceramic beading",
    category: "Ceramic",
    orientation: "landscape",
  },
  {
    file: "gallery/specialty1.jpg",
    alt: "Pet hair removal",
    caption: "Specialty: Pet hair removal",
    category: "Specialty",
    orientation: "square",
  },
  // Add more images as needed
];
