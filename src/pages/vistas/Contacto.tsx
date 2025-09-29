import { useState, useEffect } from "react";

function Contacto() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [showToast, setShowToast] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("https://hook.us2.make.com/2xqksqm1e2f6bfgn2z07824s0jtto7sh", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setShowToast(true);
    setForm({ name: "", email: "", message: "" });
  }

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <>
    
      <div className="flex flex-col gap-7 items-center mt-10 mb-35 p-7">

        <h1 className="text-zinc-50 font-bold text-2xl">Contactar</h1>

        {showToast && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-zinc-900 text-cyan-50 px-8 py-7 rounded-2xl shadow-2xl border-2 border-cyan-700 flex flex-col items-center gap-4">
              <span className="font-bold text-xl text-center">¡Mensaje enviado exitosamente!</span>
              <button
                className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-6 rounded-lg transition"
                onClick={() => setShowToast(false)}
              >
                OK
              </button>
            </div>
          </div>
        )}
        <form onSubmit={handleSubmit} className="p-0 w-full md:max-w-2xl flex flex-col gap-5">
          <label className="text-cyan-50 font-bold mb-1">Su nombre:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleInputChange}
            className="px-4 py-2 rounded-lg bg-zinc-800 text-cyan-50 border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Tu nombre"
            required
          />
          <label className="text-cyan-50 font-bold mb-1">Su email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleInputChange}
            className="px-4 py-2 rounded-lg bg-zinc-800 text-cyan-50 border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="tu@email.com"
            required
          />
          <label className="text-cyan-50 font-bold mb-1">Su mensaje:</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleTextAreaChange}
            className="px-4 py-2 rounded-lg bg-zinc-800 text-cyan-50 border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Escribe tu mensaje aquí..."
            rows={5}
            required
          />
          <button
            type="submit"
            className="w-full bg-cyan-600 text-white py-2 rounded-lg font-bold hover:bg-cyan-700 transition drop-shadow-md mt-2"
          >
            Enviar
          </button>
        </form>
      </div>
    </>
  );
}

export default Contacto;