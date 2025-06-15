import { ReactNode } from "react";

type ProyectContentProps = {
  imgSrc: string;
  title: string;
  logos?: ReactNode[]; // Cambiado a ReactNode[]
  description: string;
  tags?: string[];
};

export default function ProyectContent({
  imgSrc,
  title,
  logos = [],
  description,
  tags = [],
}: ProyectContentProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-xs mx-auto">
      <img src={imgSrc} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        {logos.length > 0 && (
          <div className="flex items-center space-x-2 mb-2">
            {logos.map((logo, idx) => (
              <span key={idx} className="w-6 h-6 flex items-center justify-center">
                {logo}
              </span>
            ))}
          </div>
        )}
        <p className="text-gray-700 text-sm mb-3">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}