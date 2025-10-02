import { ReactNode, useEffect, useRef, useState } from "react";

interface ProyectContentProps {
  imgsSrcs: string[];
  title: string;
  logos?: ReactNode[];
  description: string;
  tags?: string[];
  url?: string;
  medallas?: number[];
}

export default function ProyectContentDev({
  imgsSrcs,
  title,
  logos = [],
  description,
  tags = [],
  url,
  medallas = [],
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
    <div className="relative bg-zinc-50/80 rounded-lg shadow-md overflow-hidden max-w-xs md:max-w-md lg:max-w-lg mx-auto">
      <div className="relative w-full h-56 md:h-72 lg:h-96 flex items-center justify-center">
        {/* Carrusel deslizante */}
        <div className="overflow-hidden w-full h-56 md:h-72 lg:h-96 rounded-lg">
          <div
            className="flex w-full h-56 transition-transform duration-700"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {imgsSrcs.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={title}
                className="w-full h-56 md:h-72 lg:h-96 object-cover flex-shrink-0"
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
      {/* Medallas (iconos) en la esquina inferior derecha */}
      {medallas && medallas.length > 0 && (
        <div className="absolute bottom-3 right-3 flex items-center gap-2 z-10">
          {medallas.map((m, idx) => {
            const key = `medalla-${idx}-${m}`;
            let color = '#6b7280'; // gray-500
            let content = '🎖️';
            let title = `Medalla ${m}`;
            let textShadow = '0 4px 10px rgba(107,114,128,0.12)';

            if (m === 1) {
              color = '#b45309'; // deep gold for text (visible on light bg)
              content = '🥇​';
              title = 'Segundo lugar';
              textShadow = '0 6px 14px rgba(148,163,184,0.28)';
            } else if (m === 2) {
              color = '#374151'; // dark gray for silver emoji
              content = '🥈';
              title = 'Segundo lugar';
              textShadow = '0 6px 14px rgba(148,163,184,0.28)';
            } else if (m === 3) {
              color = '#7c2d12'; // deep bronze tone
              content = '🥉';
              title = 'Tercer lugar';
              textShadow = '0 6px 14px rgba(183,121,31,0.28)';
            }

            return (
              <span
                key={key}
                className="text-2xl font-bold leading-none"
                style={{ color, textShadow }}
                role="img"
                aria-label={title}
                title={title}
              >
                {content}
              </span>
            );
          })}
        </div>
      )}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold">{title}</h2>
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