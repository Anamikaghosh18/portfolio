import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = {
  "Frontend": [
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" }
  ],
  "Backend": [
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
  ],
  "Tools": [
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
  ]
};

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 px-4 md:px-8 bg-gray-900/50 relative overflow-hidden">
      {/* Neural network background animation */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full">
          {Array(20).fill(null).map((_, i) => (
            <g key={i}>
              {Array(2).fill(null).map((_, j) => (
                <motion.line
                  key={`${i}-${j}`}
                  x1={`${Math.random() * 100}%`}
                  y1={`${Math.random() * 100}%`}
                  x2={`${Math.random() * 100}%`}
                  y2={`${Math.random() * 100}%`}
                  stroke="#4F46E5"
                  strokeWidth="0.5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: 1,
                    opacity: 0.3,
                    transition: {
                      duration: 2,
                      delay: i * 0.1,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }
                  }}
                />
              ))}
            </g>
          ))}
        </svg>
      </div>

      <motion.div
        ref={ref}
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500">
          Skills & Technologies
        </h2>

        <div className="space-y-16">
          {Object.entries(skills).map(([category, categorySkills], categoryIndex) => (
            <div key={category} className="relative">
              <motion.div
                initial={{ x: categoryIndex % 2 === 0 ? -50 : 50, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              >
                <h3 className="text-2xl font-semibold mb-8 text-blue-400 relative inline-block">
                  {category}
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500"
                    initial={{ width: 0 }}
                    animate={inView ? { width: '100%' } : {}}
                    transition={{ duration: 0.8, delay: categoryIndex * 0.2 + 0.4 }}
                  />
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ y: 50, opacity: 0 }}
                      animate={inView ? { y: 0, opacity: 1 } : {}}
                      transition={{ duration: 0.8, delay: (categoryIndex * 0.2) + (index * 0.1) }}
                      whileHover={{ scale: 1.05 }}
                      className="group relative"
                    >
                      <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 transition-all duration-300 group-hover:border-blue-500/50">
                        <div className="relative">
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-16 h-16 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                          />
                          <motion.div
                            className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            animate={{
                              scale: [1, 1.2, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                            }}
                          />
                        </div>
                        <p className="text-center font-medium text-gray-300 group-hover:text-blue-400 transition-colors duration-300">
                          {skill.name}
                        </p>
                      </div>
                      <motion.div
                        className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"
                        animate={{
                          scale: [1, 1.02, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;