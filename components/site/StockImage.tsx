import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
};

export default function StockImage({ src, alt, width=1200, height=800, className="", priority=false }: Props) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-slate-100 ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-full w-full object-cover"
        priority={priority}
      />
    </div>
  );
}

