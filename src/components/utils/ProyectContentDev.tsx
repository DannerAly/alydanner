import { ReactNode, useEffect, useRef, useState } from "react";

interface ProyectContentProps {
  imgsSrcs: string[];
  title: string;
  logos?: ReactNode[];
  description: string;
  tags?: string[];
  url?: string;
}

export default function ProyectContentDev({
  imgsSrcs,
  title,
  logos = [],
  description,
  tags = [],
  url,
}: ProyectContentProps) {
  // Carrusel automático y manual con transición deslizante
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const length = imgsSrcs.length;

  // Cambio automático
  useEffect(() => {
    if (length <= 1) return;
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 3500);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, length]);

  // Botones
  const goToPrev = () => setCurrent((prev) => (prev - 1 + length) % length);
  const goToNext = () => setCurrent((prev) => (prev + 1) % length);

  return (
    <div className="bg-zinc-50/80 rounded-lg shadow-md overflow-hidden max-w-xs mx-auto">
      <div className="relative w-full h-56 flex items-center justify-center">
        {/* Carrusel deslizante */}
        <div className="overflow-hidden w-full h-56 rounded-lg">
          <div
            className="flex w-full h-56 transition-transform duration-700"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {imgsSrcs.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={title}
                className="w-full h-56 object-cover flex-shrink-0"
                style={{ borderRadius: "0.5rem" }}
              />
            ))}
          </div>
        </div>
        {/* Botón izquierdo */}
        {length > 1 && (
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-cyan-800/70 text-white rounded-full p-2 hover:bg-cyan-900/80 transition"
            onClick={goToPrev}
            aria-label="Anterior"
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
        {/* Botón derecho */}
        {length > 1 && (
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-cyan-800/70 text-white rounded-full p-2 hover:bg-cyan-900/80 transition"
            onClick={goToNext}
            aria-label="Siguiente"
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
        {/* Indicadores */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
          {imgsSrcs.map((_, idx) => (
            <span
              key={idx}
              className={`w-2 h-2 rounded-full bg-cyan-800 transition-all duration-300 ${idx === current ? 'opacity-100 scale-125' : 'opacity-50'}`}
            />
          ))}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-bold">{title}</h2>
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm bg-cyan-800 hover:bg-cyan-900 text-white px-3 py-1 rounded-lg transition"
            >
              Visitar
            </a>
          )}
        </div>
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