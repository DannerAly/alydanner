import ProyectContent from "../../components/utils/ProyectContent";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiAdobeaftereffects, SiAdobepremierepro, SiAdobeaudition, SiBlender } from "react-icons/si";


function ProyectosAud() {
  const proyectos = [
    {
      imgSrc: "https://img.youtube.com/vi/cNuv9UgGNY8/hqdefault.jpg", // Miniatura de YouTube
      videoUrl: "https://youtu.be/cNuv9UgGNY8", // Link al video
      title: "Tipiza Cinematic",
      logos: [
        <SiAdobepremierepro key="premiere" size={24} color="blue" />,
        <SiAdobeaudition key="audition" size={24} color="green" />,
        <SiAdobeaftereffects key="aftereffects" size={24} color="purple" />,
        <SiBlender key="blender" size={24} color="#F5792A" />
      ],
      description:
        "Travel filmmaking La Joya bella de Bolivia Hola de nuevo amigos este joven de 18 años esta muy ancioso de que puedan ver el nuevo video de Tupiza. I dream in my life Capítulo 3",
      tags: ["Documental", "Cine", "VFX"]
    },
    {
      imgSrc: "https://i.imgur.com/1k5b2aH.png",
      title: "Gestión de Incidencias",
      logos: [
        <SiAdobepremierepro key="premiere" size={24} color="#9999FF" />,
        <SiAdobeaudition key="audition" size={24} color="#00FFCC" />,
        <SiAdobeaftereffects key="aftereffects" size={24} color="#AE6EEB" />,
        <SiBlender key="blender" size={24} color="#F5792A" />
      ],
      description:
        "Herramienta para registrar, dar seguimiento y resolver incidencias en proyectos de desarrollo, facilitando la comunicación y el control de tareas.",
      tags: ["Incidencias", "Gestión", "Proyectos"]
    },
    {
      imgSrc: "https://i.imgur.com/1k5b2aH.png",
      title: "Panel de Métricas",
      logos: [<FaNodeJs key="node" size={24} color="#68a063" />, <FaReact key="react2" size={24} color="#61dafb" />],
      description:
        "Visualiza métricas clave de tus proyectos de software en tiempo real, ayudando a la toma de decisiones y mejora continua.",
      tags: ["Métricas", "Dashboard", "Proyectos"]
    }
  ];

  return (
    <>
      <div className="flex flex-col gap-7 items-center mt-4">
        <h1 className="text-zinc-50 font-bold">Proyectos Dev</h1>
        <div className="flex flex-col md:flex-row flex-wrap gap-10 items-center">
          {proyectos.map((proyecto, idx) => (
            <ProyectContent key={idx} {...proyecto} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProyectosAud;