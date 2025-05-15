import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLaptopCode, FaPalette, FaTheaterMasks, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaMobileAlt} from "react-icons/fa";

export default function Home() {
  return (
    <div className="px-6 py-10 text-center">
      {/* Intestazione con immagine */}
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/marco.jpg"
          alt="Marco Avatar"
          className="w-28 h-28 rounded-full mb-4 shadow-lg"
        />
        <h1 className="text-4xl font-bold text-marca-titolo">
          Ciao, sono Marco 👋
        </h1>
        <p className="mt-4 text-xl text-gray-700 max-w-2xl mx-auto">
          Sviluppatore front-end e web designer con una grande passione per la
          creatività, il colore e il teatro.
        </p>
      </motion.div>

      {/* Cosa faccio */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-xl shadow-md"
        >
          <FaLaptopCode className="text-4xl text-marca-azione mb-3 mx-auto" />
          <h3 className="text-4xl font-bold text-marca-titolo">Sviluppo Web</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Creo siti reattivi e moderni in React e Tailwind.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-xl shadow-md"
        >
          <FaPalette className="text-4xl text-marca-azione mb-3 mx-auto" />
          <h3 className="text-4xl font-bold text-marca-titolo">
            Design Creativo
          </h3>
          <p className="mt-2 text-gray-600 text-sm">
            Grafica, interfacce, colore e impatto visivo che emoziona.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-xl shadow-md"
        >
          <FaTheaterMasks className="text-4xl text-marca-azione mb-3 mx-auto" />
          <h3 className="text-4xl font-bold text-marca-titolo">
            Teatro & Multimedialità
          </h3>
          <p className="mt-2 text-gray-600 text-sm">
            Unisco arte e tecnologia nei progetti culturali e performativi.
          </p>
        </motion.div>
      </div>

      <h2 className="text-4xl font-bold text-marca-titolo mt-20 mb-8 text-center">
        Cosa posso fare per te
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-xl shadow-lg text-center"
        >
          <FaTheaterMasks className="text-4xl text-marca-azione mx-auto mb-3" />
          <h3 className="text-4xl font-bold text-marca-titolo mb-2">
            Siti per artisti e creativi
          </h3>
          <p className="text-gray-700 text-sm">
            Realizzo siti su misura per attori, musicisti, compagnie teatrali e
            creativi, con grande attenzione al carattere visivo e identitario.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-xl shadow-lg text-center"
        >
          <FaLaptopCode className="text-4xl text-marca-azione mx-auto mb-3" />
          <h3 className="text-4xl font-bold text-marca-titolo mb-2">
            Landing page e portfolio
          </h3>
          <p className="text-gray-700 text-sm">
            Portfolio personali, landing per eventi, progetti one-page veloci ma
            d’impatto, ottimizzati per mobile e con stile.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-xl shadow-lg text-center"
        >
          <FaMobileAlt className="text-4xl text-marca-azione mx-auto mb-3" />
          <h3 className="text-4xl font-bold text-marca-titolo mb-2">
            Game App
          </h3>
          <p className="text-gray-700 text-sm">
            Sviluppo Game App con React Native interattive, per la comunicazione
            e l'interazione con i clienti.
          </p>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Link
          to="/portfolio"
          className="inline-block bg-marca-azione hover:bg-blue-700 text-white px-4 py-2 rounded-full transition"
        >
          Guarda i miei progetti 🚀
        </Link>
      </motion.div>
      <motion.div
        className="mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Link
          to="/contact"
          className="inline-block bg-marca-azione hover:bg-blue-700 text-white px-4 py-2 rounded-full transition"
        >
          Parliamone ✉️
        </Link>
      </motion.div>
      {/* Tecnologie */}
      <h2 className="text-2xl font-semibold text-marca-titolo mt-16 mb-6">
        Tecnologie che uso
      </h2>
      <div className="flex justify-center flex-wrap gap-6 text-4xl text-purple-600">
        <motion.div whileHover={{ scale: 1.2 }}>
          <FaHtml5 title="HTML5" className="text-marca-azione" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }}>
          <FaCss3Alt title="CSS3" className="text-marca-azione" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }}>
          <FaJs title="JavaScript" className="text-marca-azione" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }}>
          <FaReact title="React" className="text-marca-azione" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }}>
          <FaNodeJs title="Node.js" className="text-marca-azione" />
        </motion.div>
      </div>
    </div>
  );
}
