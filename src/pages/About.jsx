import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaTheaterMasks, FaLaptopCode, FaTools } from "react-icons/fa";

export default function About() {
  return (
    <div className="px-6 py-10 max-w-5xl mx-auto">
      {/* Titolo */}
      <motion.h1
        className="text-4xl font-bold text-center text-marca-titolo mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Chi sono
      </motion.h1>

      {/* Bio breve */}
      <motion.p
        className="text-lg text-gray-700 text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Sono Marco, uno sviluppatore front-end e web designer con uno stile creativo e una formazione artistica.  
        Amo i progetti che uniscono tecnologia, emozione e impatto visivo 🎨💡
      </motion.p>

      {/* Valori personali */}
      <h2 className="text-2xl font-semibold text-marca-titolo mb-4">I miei valori</h2>
      <div className="flex flex-wrap gap-4 mb-12">
        {["Creatività", "Empatia", "Precisione", "Cura del dettaglio", "Espressività", "Accessibilità"].map((valore, i) => (
          <motion.span
            key={i}
            whileHover={{ scale: 1.1 }}
            className="px-4 py-2 bg-green-500 text-white rounded-full text-sm"
          >
            {valore}
          </motion.span>
        ))}
      </div>

      {/* Esperienze */}
      <h2 className="text-2xl font-semibold text-marca-titolo mb-4">Percorso</h2>
      <ul className="border-l-4 border-blue-300 pl-4 space-y-6 mb-12">
        <li>
          <div className="text-marca-titolo font-semibold">2024 – oggi</div>
          <div>Sviluppatore front-end freelance e web designer per progetti creativi</div>
        </li>
        <li>
          <div className="text-marca-titolo font-semibold">2021 – 2023</div>
          <div>Collaborazione con realtà teatrali per siti, grafiche e promozione digitale</div>
        </li>
        <li>
          <div className="text-marca-titolo font-semibold">2018 – 2021</div>
          <div>Percorso in Scienze Politiche e delle Relazioni Internazionali</div>
        </li>
      </ul>

      {/* Tool e metodi */}
      <h2 className="text-2xl font-semibold text-marca-titolo mb-4">Strumenti e tecnologie preferite</h2>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-purple-600 dark:text-purple-300 text-3xl mb-12">
        <motion.div whileHover={{ scale: 1.2 }}><FaCode title="HTML / CSS / JS" className="text-marca-azione"/></motion.div>
        <motion.div whileHover={{ scale: 1.2 }}><FaLaptopCode title="React / Tailwind"className="text-marca-azione" /></motion.div>
        <motion.div whileHover={{ scale: 1.2 }}><FaPaintBrush title="Figma / Canva"className="text-marca-azione" /></motion.div>
        <motion.div whileHover={{ scale: 1.2 }}><FaTools title="Git / GitHub"className="text-marca-azione" /></motion.div>
      </div>

      {/* Quando non programmo */}
      <h2 className="text-2xl font-semibold text-marca-titolo mb-4">Quando non programmo...</h2>
<p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
        ...mi trovi in teatro, tra le prove di uno spettacolo o a scrivere nuove idee su un taccuino.  
        Il teatro mi ha insegnato l’ascolto, l’espressività e il valore del dettaglio.  
        Tutti elementi che porto anche nel mio modo di sviluppare progetti web.
      </p>

      <div className="text-center text-purple-700 text-4xl">
        <FaTheaterMasks className="text-marca-azione" />
      </div>
    </div>
  );
}
