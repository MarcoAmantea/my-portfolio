import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
<footer className="bg-white dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 p-6 text-center text-xs sm:text-sm text-gray-600 dark:text-gray-400 transition-colors duration-500">
      <div className="flex justify-center space-x-6 text-xl mb-2 text-purple-600">
        <a href="https://github.com/MarcoAmantea" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-marca-azione" />
        </a>
        <a href="https://www.linkedin.com/in/marco-amantea/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-marca-azione"/>
        </a>
        <a href="https://instagram.com/Marcoamantea_" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-marca-azione"/>
        </a>
      </div>
      <div>
        © {new Date().getFullYear()} Marco Amantea | Web Developer & Designer. Tutti i diritti riservati.
      </div>
    </footer>
  );
}
