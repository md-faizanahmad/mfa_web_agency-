import Image from "next/image";

interface Props {
  src: string;
  alt: string;
}

export function DeviceMockup({ src, alt }: Props) {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg">
      <Image src={src} alt={alt} width={800} height={500} />
    </div>
  );
}
