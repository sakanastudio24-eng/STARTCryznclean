import React, { useRef } from "react";

interface PhotoPickerProps {
  photos: File[];
  setPhotos: (files: File[]) => void;
  max?: number;
}

export default function PhotoPicker({ photos, setPhotos, max = 3 }: PhotoPickerProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files).slice(0, max);
    setPhotos(files);
  };
  return (
    <div>
      <label className="block text-sm font-medium mb-1">Photos (up to {max})</label>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={handleChange}
        className="block w-full border-subtle border rounded p-2 focus-visible:ring-2 focus-visible:ring-brand/60"
        aria-label="Upload photos"
      />
      <div className="flex gap-2 mt-2">
        {photos.map((file, i) => (
          <span key={i} className="inline-block bg-zinc-200 dark:bg-zinc-800 text-xs px-2 py-1 rounded truncate max-w-[160px]">{file.name}</span>
        ))}
      </div>
    </div>
  );
}
