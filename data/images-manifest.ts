
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
    file: "hero/placeholder.svg",
    alt: "Cruzn Clean hero image",
    caption: "Cruzn Clean",
    category: "Exterior",
    orientation: "landscape",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    file: "gallery/placeholder.svg",
    alt: "Exterior detail result",
    caption: "Exterior detailing",
    category: "Exterior",
    orientation: "landscape",
  },
  {
    file: "gallery/placeholder.svg",
    alt: "Interior detailing",
    caption: "Interior detailing",
    category: "Interior",
    orientation: "landscape",
  },
  {
    file: "gallery/placeholder.svg",
    alt: "Ceramic coating finish",
    caption: "Ceramic coating",
    category: "Ceramic",
    orientation: "landscape",
  },
];
