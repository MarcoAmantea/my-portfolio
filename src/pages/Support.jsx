import { motion } from "framer-motion";
export default function Support() {
  return (
    <div className="text-center py-20 px-6 max-w-xl mx-auto">
      <motion.h1
        className="text-4xl font-bold text-center text-marca-titolo mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Supportami
      </motion.h1>
      <motion.p
        className="text-lg text-gray-700 text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Se ti piace quello che faccio, puoi offrirmi un caffè (o un codice 😄)
          per aiutarmi a crescere come sviluppatore!
        </p>
      </motion.p>
      <a
        href="https://buymeacoffee.com/marcoamanteadeveloper" // <-- cambia con il tuo link personale
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-marca-azione text-white px-6 py-3 rounded-full text-lg hover:bg-blue-500 transition-all"
      >
        Offrimi un caffè ☕
      </a>
    </div>
  );
}
