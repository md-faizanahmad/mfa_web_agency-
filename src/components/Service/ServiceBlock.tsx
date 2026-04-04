// components/services/ServiceBlock.tsx

import Image from "next/image";

type Props = {
  title: string;
  description: string;
  outcomes: string[];
  reverse?: boolean;
  image: string;
};

export function ServiceBlock({
  title,
  description,
  outcomes,
  reverse,
  image,
}: Props) {
  return (
    <div
      className={`grid md:grid-cols-2 gap-12 items-start ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* TEXT SIDE */}
      <div className="mt-15">
        <h3 className="text-3xl font-semibold mb-4">{title}</h3>

        <p className="text-gray-500 mb-6">{description}</p>

        <ul className="space-y-2 text-sm text-gray-700">
          {outcomes.map((item, i) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>

        <button className="mt-6 text-sm font-medium underline">
          Start project →
        </button>
      </div>

      {/* VISUAL SIDE */}
      <div className="relative aspect-4/3 bg-gray-100 rounded-xl overflow-hidden group">
        <Image
          src={image}
          alt=""
          fill
          className="object-fit transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
      {/* <Image alt="" sizes="" width={50} height={50} src={image} /> */}
    </div>
  );
}
