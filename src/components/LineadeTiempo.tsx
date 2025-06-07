import { motion } from "framer-motion";

const timelineItems = [
  { date: "2018-03-01", text: "Your order starts processing" },
  { date: "2018-03-02", text: "Order out of stock" },
  { date: "2018-03-10", text: "Arrival" },
  { date: "2018-03-12", text: "Order out of the library" },
  { date: "2018-03-15", text: "Sending you a piece" },
];

export default function TimelineVertical() {
  return (
    <div className="relative flex flex-col min-h-[350px] pl-8">
      {/* Línea vertical */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-400" />
      {timelineItems.map((item, idx) => (
        <motion.div
          key={item.date}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.15 }}
          className="flex items-start mb-6"
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