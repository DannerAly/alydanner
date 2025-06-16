import ProyectContent from "../../components/utils/ProyectContent";
import { SiAdobeaftereffects, SiAdobepremierepro, SiAdobeaudition, SiBlender, SiAdobephotoshop } from "react-icons/si";
import Modelo3D from "../../components/Modelo3D";


function ProyectosAud() {
  const proyectos = [
    {
      imgSrc: "https://img.youtube.com/vi/ABXvrLiqeEE/hqdefault.jpg",
      videoUrl: "https://youtu.be/ABXvrLiqeEE?si=vvVtdjsQkv9ls4Kh", // Link al video
      title: "Sucre Cinematic - Conociendo la Capital de Bolivia",
      logos: [
        <SiAdobepremierepro key="premiere" size={24} color="#7C1FFF" />,
        <SiAdobeaudition key="audition" size={24} color="green" />,
        <SiAdobeaftereffects key="aftereffects" size={24} color="#C154FF" />,
        <SiAdobephotoshop key="photoshop" size={24} color="blue" />,
        <SiBlender key="blender" size={24} color="#FF7300" />,
      ],
      description:
        "En este proyecto exploto mis habilidades técnicas para lograr mostrar Sucre de una forma cinemática/profesional con mi estilo y creatividad.",
      tags: ["Documental", "Cine", "VFX", "Animación"]
    },
    {
      imgSrc: "https://img.youtube.com/vi/cNuv9UgGNY8/hqdefault.jpg", // Miniatura de YouTube
      videoUrl: "https://youtu.be/cNuv9UgGNY8", // Link al video
      title: "Tupiza Cinematic - La Joya Bella de Bolivia",
      logos: [
        <SiAdobepremierepro key="premiere" size={24} color="#7C1FFF" />,
        <SiAdobeaudition key="audition" size={24} color="green" />,
        <SiAdobeaftereffects key="aftereffects" size={24} color="#C154FF" />,
        <SiAdobephotoshop key="photoshop" size={24} color="blue" />,
        <SiBlender key="blender" size={24} color="#FF7300" />,
      ],
      description:
        "Travel filmmaking La Joya bella de Bolivia Hola de nuevo amigos este joven de 18 años esta muy ancioso de que puedan ver el nuevo video de Tupiza. I dream in my life Capítulo 3",
      tags: ["Documental", "Cine", "VFX"]
    },
    {
      imgSrc: "https://img.youtube.com/vi/uy-AhG5sg9Q/hqdefault.jpg", // Miniatura de YouTube
      videoUrl: "https://www.youtube.com/watch?v=uy-AhG5sg9Q&t=9s", // Link al video
      title: "Villazón Cinematic - Es magnífico 🤩",
      logos: [
        <SiAdobepremierepro key="premiere" size={24} color="#7C1FFF" />,
        <SiAdobeaudition key="audition" size={24} color="green" />,
        <SiAdobeaftereffects key="aftereffects" size={24} color="#C154FF" />,
        <SiAdobephotoshop key="photoshop" size={24} color="blue" />,
        <SiBlender key="blender" size={24} color="#FF7300" />,
      ],
      description:
        "Travel filmmaking La Joya bella de Bolivia Hola de nuevo amigos este joven de 18 años esta muy ancioso de que puedan ver el nuevo video de Tupiza. I dream in my life Capítulo 3",
      tags: ["Documental", "Cine", "VFX"]
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-7 items-center mt-10 mb-35">

        <h1 className="text-zinc-50 font-bold text-2xl">Proyectos Audiovisuales</h1>
        <Modelo3D url="/maximo.glb" width="400px" height="100%" />
        <h2 className="text-zinc-50 font-bold text-1xl">Serie: I dream in my life</h2>
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