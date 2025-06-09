import {
    SiHtml5, SiCss3, SiJavascript, SiTypescript, SiNodedotjs, SiMysql,
    SiReact, SiAstro, SiNextdotjs, SiTailwindcss, SiBootstrap, SiExpress, SiPostgresql,
    SiGit, SiNestjs, SiNotion, SiFigma, SiAdobexd, SiAdobeillustrator, SiAdobeaftereffects, SiAdobepremierepro,
    SiAdobeaudition, SiAdobephotoshop, SiBlender, SiPostman
} from "react-icons/si";

// Componente para mostrar el PNG de VS Code
const VSCodePNG = () => (
    <img
        src="/vscode.png"
        alt="VS Code"
        className="w-10 h-10 object-contain mb-1"
        style={{ filter: "drop-shadow(0 0 2px #3b82f6)" }}
    />
);

// Componente para mostrar el WEBP de DaVinci Resolve
const DaVinciResolveWEBP = () => (
    <img
        src="/davinci.webp"
        alt="DaVinci Resolve"
        className="w-10 h-10 object-contain mb-1"
        style={{ filter: "drop-shadow(0 0 2px #00b8f1)" }}
    />
);

const categories = [
    {
        title: "Lenguajes",
        items: [
            { icon: <SiHtml5 className="text-orange-500" />, label: "HTML" },
            { icon: <SiCss3 className="text-blue-500" />, label: "CSS" },
            { icon: <SiJavascript className="text-yellow-300" />, label: "JavaScript" },
            { icon: <SiTypescript className="text-blue-400" />, label: "TypeScript" },
            { icon: <SiNodedotjs className="text-green-600" />, label: "NodeJS" },

        ],
    },
    {
        title: "Frameworks y Utils",
        items: [
            { icon: <SiReact className="text-cyan-400" />, label: "React" },
            { icon: <SiAstro className="text-orange-400" />, label: "Astro" },
            { icon: <SiNextdotjs className="text-white" />, label: "Next.Js" },
            { icon: <SiTailwindcss className="text-cyan-300" />, label: "Tailwind" },
            { icon: <SiBootstrap className="text-purple-500" />, label: "Bootstrap" },
            { icon: <SiExpress className="text-white" />, label: "Express" },
            { icon: <SiNestjs className="text-pink-700" />, label: "NestJS" },
            
            { icon: <SiPostgresql className="text-blue-400" />, label: "PostgreSQL" },
            { icon: <SiMysql />, label: "MySQL" },
        ],
    },
    {
        title: "Herramientas",
        items: [
            { icon: <SiGit className="text-orange-600" />, label: "Git" },
            { icon: <VSCodePNG />, label: "VS Code" },
            { icon: <SiPostman className="text-orange-500" />, label: "Postman" },
            { icon: <SiNotion className="text-white" />, label: "Notion" },
            { icon: <SiFigma className="text-white" />, label: "Figma" },
            { icon: <SiAdobexd className="text-pink-600" />, label: "Adobe XD" },
            { icon: <SiAdobeillustrator className="text-yellow-400" />, label: "Adobe Illustrator" },
            { icon: <SiAdobeaftereffects className="text-purple-500" />, label: "Adobe After Effects" },
            { icon: <SiAdobepremierepro className="text-indigo-500" />, label: "Adobe Premiere" },
            { icon: <SiAdobeaudition className="text-green-700" />, label: "Adobe Audition" },
            { icon: <SiAdobephotoshop className="text-blue-300" />, label: "Adobe Photoshop" },
            { icon: <SiBlender className="text-orange-400" />, label: "Blender" },
            { icon: <DaVinciResolveWEBP />, label: "DaVinci Resolve" },
        ],
    },
];

export default function Softwares() {
    return (
        <div className="text-white space-y-8">
            {categories.map((cat) => (
                <div key={cat.title}>
                    <h2 className="text-lg font-bold mb-4">{cat.title}</h2>
                    <div className="flex flex-wrap gap-6">
                        {cat.items.map(({ icon, label }) => (
                            <div key={label} className="flex flex-col items-center w-20">
                                <span className="text-4xl mb-1">{icon}</span>
                                <span className="text-xs text-center">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}