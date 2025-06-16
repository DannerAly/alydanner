import ProyectContent from "../../components/utils/ProyectContent";
import { SiAdobeaftereffects, SiAdobepremierepro, SiAdobeaudition, SiBlender, SiAdobephotoshop } from "react-icons/si";
import Modelo3D from "../../components/Modelo3D";

import sucreTrailer from "../../assets/images/miniaturas/SucreTrailer.png"; // Asegúrate de que la ruta sea correcta

function ProyectosAud() {
  const proyectos = [
    {
      imgSrc: "https://img.youtube.com/vi/ABXvrLiqeEE/hqdefault.jpg",
      videoUrl: "https://youtu.be/ABXvrLiqeEE?si=vvVtdjsQkv9ls4Kh", // Link al video
      title: "Sucre Cinematic - La Capital / Capítulo 4",
      logos: [
        <SiAdobepremierepro key="premiere" size={24} color="#7C1FFF" />,
        <SiAdobeaudition key="audition" size={24} color="green" />,
        <SiAdobeaftereffects key="aftereffects" size={24} color="#C154FF" />,
        <SiAdobephotoshop key="photoshop" size={24} color="blue" />,
        <SiBlender key="blender" size={24} color="#FF7300" />,
      ],
      description:
        "Conoce Sucre de una forma cinemática/profesional con un estilo y creatividad original.",
      tags: ["Cine", "VFX", "Animación", "3D"]
    },
    {
      imgSrc: sucreTrailer, // Miniatura de YouTube
      videoUrl: "https://www.facebook.com/watch/?v=4281865852037917&ref=sharing", // Link al video
      title: "TRAILER Sucre Cinematic - La Capital / Capítulo 4.",
      logos: [
        <SiAdobepremierepro key="premiere" size={24} color="#7C1FFF" />,
        <SiAdobeaudition key="audition" size={24} color="green" />,
        <SiAdobeaftereffects key="aftereffects" size={24} color="#C154FF" />,
        <SiAdobephotoshop key="photoshop" size={24} color="blue" />,
        <SiBlender key="blender" size={24} color="#FF7300" />,
      ],
      description:
        "Este es el trailer de Sucre Cinematic, un video creativo y profesional que muestra la belleza de Sucre.",
      tags: ["Cine", "VFX", "3D"]
    },
    {
      imgSrc: "https://img.youtube.com/vi/cNuv9UgGNY8/hqdefault.jpg", // Miniatura de YouTube
      videoUrl: "https://youtu.be/cNuv9UgGNY8", // Link al video
      title: "Tupiza Cinematic - La Joya Bella de Bolivia / Capítulo 3",
      logos: [
        <SiAdobepremierepro key="premiere" size={24} color="#7C1FFF" />,
        <SiAdobeaudition key="audition" size={24} color="green" />,
        <SiAdobeaftereffects key="aftereffects" size={24} color="#C154FF" />,
        <SiAdobephotoshop key="photoshop" size={24} color="blue" />,
        <SiBlender key="blender" size={24} color="#FF7300" />,
      ],
      description:
        "Este joven a los 18 años hizo Tupiza Cinematic y esta muy ancioso de que puedan verlo.",
      tags: ["Documental", "Cine", "VFX"]
    },
    {
      imgSrc: "https://img.youtube.com/vi/uy-AhG5sg9Q/hqdefault.jpg", // Miniatura de YouTube
      videoUrl: "https://www.youtube.com/watch?v=uy-AhG5sg9Q&t=9s", // Link al video
      title: "Villazón Cinematic - Es magnífico 🤩 / Capítulo 2",
      logos: [
        <SiAdobepremierepro key="premiere" size={24} color="#7C1FFF" />,
        <SiAdobeaudition key="audition" size={24} color="green" />,
        <SiAdobeaftereffects key="aftereffects" size={24} color="#C154FF" />,
        <SiAdobephotoshop key="photoshop" size={24} color="blue" />,
        <SiBlender key="blender" size={24} color="#FF7300" />,
      ],
      description:
        "Conoce Villazón desde mis cámara, mis ojos, de aquí soy y quiero mostrartelo.",
      tags: ["Documental", "Cine", "VFX"]
    },
    {
      imgSrc: "https://img.youtube.com/vi/2K5VEschXmg/hqdefault.jpg", // Miniatura de YouTube
      videoUrl: "https://youtu.be/2K5VEschXmg?si=pmvlSk_5hlmLuvjc", // Link al video
      title: "Soy de la PROMO 2020 - En cuarentena / Capítulo 1",
      logos: [
        <SiAdobepremierepro key="premiere" size={24} color="#7C1FFF" />,
        <SiAdobeaudition key="audition" size={24} color="green" />,
        <SiAdobeaftereffects key="aftereffects" size={24} color="#C154FF" />,
        <SiAdobephotoshop key="photoshop" size={24} color="blue" />,
        <SiBlender key="blender" size={24} color="#FF7300" />,
      ],
      description:
        "Soy de la promo 2020, hice este video en cuarentena y lo subí a YouTube.",
      tags: ["Documental", "Cine", "VFX"]
    },

  ];

  return (
    <>
      <div className="flex flex-col gap-7 items-center mt-10 mb-35">

        <h1 className="text-zinc-50 font-bold text-2xl">Proyectos Audiovisuales</h1>
        <Modelo3D url="/maximo.glb" width="400px" height="100%" />
        {/*Seria I dream in my life */}
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