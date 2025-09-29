import { SiFastapi, SiNestjs, SiFlutter, SiGooglegemini, SiPython, SiReact, SiTailwindcss, SiVercel } from "react-icons/si";
import ProyectContentDev from "../../components/utils/ProyectContentDev";
import Modelo3D from "../../components/Modelo3D";

function ProyectosDev() {
  const proyectosDev = [
    {
      imgsSrcs: [
        "https://media.licdn.com/dms/image/v2/D4E22AQHv6R_RoKs5_w/feedshare-shrink_1280/B4EZfDtqv.GcAk-/0/1751335220443?e=1761782400&v=beta&t=16ARyQuaTWsdnq2KtaMKPyLFdulR2R1Vfc4OC1pZWYo",
        "https://i.imgur.com/2O2Ohg5.png",
        "https://media.licdn.com/dms/image/v2/D4E22AQERKweEwmzDww/feedshare-shrink_1280/B4EZfDtqwOHwAk-/0/1751335225233?e=1761782400&v=beta&t=1gEk4vbOrVwx0A-BRKxFoej8BMJ3-Tnp4gjTixB6oFc"
      
      ],
      title: "Juli AI",
      logos: [
        <SiNestjs key="nestjs" size={24} color="#E0234E" />,
        <SiFastapi key="fastapi" size={24} color="#009688" />,
        <SiFlutter key="flutter" size={24} color="#02569B" />,
        <SiGooglegemini key="gemini" size={24} color="#4285F4" />,
        <SiPython key="python" size={24} color="#3776AB" />,
      ],
      description:
        "App de redacción de Informes médicos impulsados con IA. Ganadora del Primer lugar en la Hackathon Build with AI Bolivia 2025.",
      tags: ["Gemini AI", "NestJS", "FastAPI"]
    },

    {
      imgsSrcs: [
        "https://i.imgur.com/V6fRBJS.png"
      ],
      title: "Trivia APP - PBACC",
      logos: [
        <SiReact key="react" size={24} color="#61DAFB" />,
        <SiTailwindcss key="tailwind" size={24} color="#06B6D4" />,
        <SiVercel key="vercel" size={24} color="#000000" />,
      ],
      description:
        "Aplicación web de trivia desarrollada para la Plataforma Boliviana de Acción Contra el Cambio Climático PBACC.",
      tags: ["Cine", "VFX", "3D"]
    },
    {
      imgsSrcs: [
        "https://img.youtube.com/vi/ABXvrLiqeEE/hqdefault.jpg"
      ],
      title: "Trivia APP - PBACC",
      logos: [
        <SiReact key="react" size={24} color="#61DAFB" />,
        <SiTailwindcss key="tailwind" size={24} color="#06B6D4" />,
        <SiVercel key="vercel" size={24} color="#000000" />,
      ],
      description:
        "Aplicación web de trivia desarrollada para la Plataforma Boliviana de Acción Contra el Cambio Climático PBACC.",
      tags: ["Cine", "VFX", "3D"]
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-7 items-center mt-10 mb-35">
        <h1 className="text-zinc-50 font-bold text-2xl">Proyectos DEV</h1>
         <Modelo3D url="/maximo.glb" width="400px" height="100%" />
        <div className="flex flex-col md:flex-row flex-wrap gap-5 md:w-4/5 items-center">
          {proyectosDev.map((proyecto, idx) => (
            <ProyectContentDev key={idx} {...proyecto} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProyectosDev;
