export const SERVICE_ZIPS: string[] = [
  "95616", "95618", "95695", "95691", "95776", // Davis / Woodland / West Sac
  "95814", "95816", "95817", "95818", "95819", "95820", // Sacramento core
  "95825", "95826", "95827", "95831", "95832", "95833", "95834", "95835", // Sac neighborhoods
  "95608", "95610", "95621", "95628", "95630", "95624", // Carmichael / Citrus / Folsom / Elk Grove
  "95757", "95758", "95765", "95661", "95678", // Elk Grove / Roseville
];

export function isZipInRange(zip: string): boolean {
  const trimmed = (zip || "").trim();
  if (!/^\d{5}$/.test(trimmed)) return false;
  return SERVICE_ZIPS.includes(trimmed);
}
