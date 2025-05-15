import projects from '../data/projects';
import { motion } from 'framer-motion';

export default function Portfolio() {
  return (
    <div className="px-6 py-10">
      <h1 className="text-4xl font-bold text-center text-marca-titolo mb-10">Portfolio</h1>
<div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.03 }}
          >
<img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-xl" />
            <div className="p-5">
              <h2 className="text-2xl font-bold text-marca-titolo">{project.title}</h2>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-sm bg-green-500 text-white px-2 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex justify-between mt-4">
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Visita il sito</a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Progetto su GitHub</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
