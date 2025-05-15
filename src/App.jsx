import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './components/footer';
import Support from './pages/Support';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Services from './pages/Services';
import ScrollToTop from "./components/ScrollToTop";






export default function App() {
  const [showHeart, setShowHeart] = useState(true);

useEffect(() => {
  const handleScroll = () => {
    const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
    setShowHeart(!scrolledToBottom);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
 <Router>
      <ScrollToTop />

      <div className="min-h-screen pt-20 flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/support" element={<Support />} />

          </Routes>
        </div>
        <Footer />
      <motion.a
  href="https://buymeacoffee.com/marcoamanteadeveloper"
  className="fixed bottom-8 sm:bottom-6 right-6 z-50 bg-marca-azione text-white text-2xl rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:scale-110 transition-all"
  title="Supportami"
  initial={{ opacity: 1, scale: 1 }}
  animate={{
    opacity: showHeart ? 1 : 0,
    scale: showHeart ? [1, 1.15, 1] : 1,
  }}
  transition={{
    duration: 1.2,
    repeat: Infinity,
    repeatType: "loop",
  }}
>
  💖
</motion.a>




      </div>
    </Router>
  );
}
