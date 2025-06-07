import { motion } from "framer-motion";

const timelineItems = [
  { date: "2002", text: "Nació en Potosí - Bolivia" },
  { date: "2017", text: "Inició su carrera en Redes Sociales" },
  { date: "2019", text: "Inició como productor audiovisual independiente." },
  { date: "2021", text: "Comenzó a estudiar Ing. de Sistemas y Derecho" },
  { date: "2025", text: "Trabaja como Freelancer" },
];

export default function TimelineVertical() {
  return (
    <div className="relative flex flex-col  min-h-[350px] pl-8">
      {/* Línea vertical */}
      <div className="absolute left-4 top-0 h-92 md:h-74 bottom-0 w-0.5 bg-gradient-to-b from-zinc-700 to-cyan-400" />
      {timelineItems.map((item, idx) => (
        <motion.div
          key={item.date}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.4, duration: 0.8 }}
          className="flex items-start  mb-4"
        >
          {/* Punto alineado con la línea */}
          <div className="relative" style={{ width: '2rem' }}>
            <span
              className={`absolute left-1 top-2 w-3 h-3 rounded-full border-2 ${
                idx === timelineItems.length - 1
                  ? "bg-cyan-400 border-cyan-400"
                  : "bg-gray-400 border-gray-400"
              }`}
            />
          </div>
          {/* Contenido */}
          <div className="ml-2 text-left">
            <div className="text-gray-100 font-bold">{item.date}</div>
            <div className="text-gray-200">{item.text}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}