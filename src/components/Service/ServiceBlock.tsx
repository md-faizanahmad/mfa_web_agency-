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
    <div className="relative rounded-2xl overflow-hidden">
      {/* RIGHT SIDE BACKGROUND IMAGE */}
      <div className="absolute inset-y-0 right-0 w-1/2">
        <Image src={image} alt={title} fill className="object-cover " />

        {/* soft fade instead of dark overlay */}
        <div className="absolute inset-0 bg-linear-to-l from-transparent via-white/5" />
      </div>

      {/* CONTENT */}
      <div
        className={`relative grid md:grid-cols-2 gap-12 p-8 md:p-14 items-center ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* TEXT */}
        <div className="max-w-lg">
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

        {/* RIGHT EMPTY (image is already background) */}
        <div />
      </div>
    </div>
  );
}
