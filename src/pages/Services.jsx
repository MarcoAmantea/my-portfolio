import { motion } from "framer-motion";
import { FaLaptopCode, FaPalette, FaMobileAlt, FaUser } from "react-icons/fa";

export default function Services() {
  return (
    <div className="px-6 py-16 max-w-6xl mx-auto text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 transition-colors">
      <motion.h1
        className="text-4xl font-bold text-center text-marca-titolo mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Servizi
      </motion.h1>
       <motion.p
        className="text-lg text-gray-700 text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        
      >
      <p className="text-center max-w-2xl mx-auto mb-12 text-gray-600 dark:text-gray-300">
        Ecco cosa posso realizzare per te: progetti su misura, dal design al
        codice, con attenzione ai dettagli e uno stile che ti rappresenti
        davvero.
      </p>
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Sviluppo siti */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition"
        >
          <FaLaptopCode className="text-4xl text-marca-azione mb-4" />
          <h3 className="text-xl font-semibold mb-2">Siti Web su misura</h3>
          <p className="text-sm mb-2">
            Portfolio, siti personali o per attività artistiche. Responsive,
            veloci e creativi.
          </p>
          <p className="text-sm text-marca-titolo font-bold">Da 250€</p>
        </motion.div>

        {/* Web design */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition"
        >
          <FaPalette className="text-4xl text-marca-azione mb-4" />
          <h3 className="text-xl font-semibold mb-2">Design grafico e UI</h3>
          <p className="text-sm mb-2">
            Mockup, layout, palette e identità visiva. Anche per social, eventi
            o branding.
          </p>
          <p className="text-sm text-marca-titolo font-bold">Da 150€</p>
        </motion.div>

        {/* App vocali */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition"
        >
          <FaMobileAlt className="text-4xl text-marca-azione mb-4" />
          <h3 className="text-xl font-semibold mb-2">Game App interattive</h3>
          <p className="text-sm mb-2">
            Creazione di giochi interattivi con un'interfaccia utente intuitiva
            e funzionale.
          </p>
          <p className="text-sm text-marca-titolo font-bold">
            Preventivo su richiesta
          </p>
        </motion.div>

        {/* Consulenze */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition"
        >
          <FaUser className="text-4xl text-marca-azione mb-4" />
          <h3 className="text-xl font-semibold mb-2">Consulenze & Restyling</h3>
          <p className="text-sm mb-2">
            Analisi del tuo sito attuale e proposte di miglioramento tecnico,
            visivo e strategico.
          </p>
          <p className="text-sm text-marca-titolo font-bold">Da 50€/ora</p>
        </motion.div>
      </div>

      <div className="text-center mt-12">
        <a
          href="/contact"
          className="inline-block bg-marca-azione hover:bg-blue-500 text-white px-6 py-3 rounded-full text-lg transition"
        >
          Contattami per un preventivo 💬
        </a>
      </div>
    </div>
  );
}
