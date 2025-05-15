import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // 1. Notifica a Marco
    emailjs
      .sendForm("service_axy7m8k", "template_l3zvl8n", form.current, "qLMuqXSmB-GNKT18D")
      .then(() => {
        console.log("Notifica inviata a Marco");
      })
      .catch((error) => {
        console.error("Errore nella notifica a Marco:", error.text);
      });

    // 2. Autorisposta al cliente SOLO se non già inviata
    if (!localStorage.getItem("autoReplySent")) {
      emailjs
        .sendForm("service_axy7m8k", "template_exdpz39", form.current, "qLMuqXSmB-GNKT18D")
        .then(() => {
          console.log("Autorisposta inviata");
          localStorage.setItem("autoReplySent", "true");
          setSent(true);
          form.current.reset();
        })
        .catch((error) => {
          console.error("Errore nell'autorisposta:", error.text);
        });
    } else {
      setSent(true);
      form.current.reset();
    }
  };

  return (
    <div className="px-6 py-10 max-w-xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-marca-titolo mb-6">Contattami</h1>
      {sent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-green-100 text-green-800 p-4 rounded mb-6 text-center"
        >
          Messaggio inviato con successo! ✅
        </motion.div>
      )}
      <form ref={form} onSubmit={sendEmail} className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg transition-colors">
        <input
          type="text"
          name="user_name"
          placeholder="Il tuo nome"
          required
          className="w-full p-2 border rounded text-sm sm:text-base"
        />
        <input
          type="email"
          name="user_email"
          placeholder="La tua email"
          required
          className="w-full p-2 border rounded text-sm sm:text-base"
        />
        <textarea
          name="message"
          placeholder="Il tuo messaggio"
          rows="5"
          required
          className="w-full p-2 border rounded text-sm sm:text-base"
        />
        <button type="submit" className="bg-green-500 hover:bg-blue-500 text-white px-4 py-2 rounded transition-all">
          Invia ✉️
        </button>
      </form>
    </div>
  );
}
