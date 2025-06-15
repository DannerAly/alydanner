import { ReactNode } from "react";
import { FaPlayCircle } from "react-icons/fa";

type ProyectContentProps = {
  imgSrc: string;
  title: string;
  logos?: ReactNode[];
  description: string;
  tags?: string[];
  videoUrl?: string;
};

export default function ProyectContent({
  imgSrc,
  title,
  logos = [],
  description,
  tags = [],
  videoUrl,
}: ProyectContentProps) {
  return (
    <div className="bg-zinc-50/80 rounded-lg shadow-md overflow-hidden max-w-xs mx-auto">
      <div className="relative w-full">
        {videoUrl ? (
          <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
            <img
              src={imgSrc}
              alt={title}
              className="w-full object-cover h-40 block"
            />
            <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <FaPlayCircle className="text-white text-4xl drop-shadow-lg opacity-80" />
            </span>
          </a>
        ) : (
          <img
            src={imgSrc}
            alt={title}
            className="w-full h-80 object-cover block"
          />
        )}
      </div>
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
              className="bg-cyan-800 text-gray-50 text-xs px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}