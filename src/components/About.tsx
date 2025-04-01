import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Code2, Coffee, Lightbulb } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Brain,
      title: "AI Enthusiast",
      description: "Passionate about artificial intelligence and its applications"
    },
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable and efficient code is my priority"
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Love tackling complex challenges with innovative solutions"
    },
    {
      icon: Coffee,
      title: "Quick Learner",
      description: "Always eager to learn and adapt to new technologies"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 md:px-8 relative overflow-hidden">
      <motion.div
        ref={ref}
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 p-8 rounded-2xl backdrop-blur-sm border border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">My Journey</h3>
              <p className="text-lg leading-relaxed text-gray-300">
                I'm a passionate developer with a strong foundation in web technologies and a keen eye for design. 
                With [X] years of experience in the field, I've worked on various projects that have helped me develop 
                a deep understanding of modern web development practices.
              </p>
            </div>
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 rounded-2xl blur-xl"
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 p-8 rounded-2xl backdrop-blur-sm border border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">My Focus</h3>
              <p className="text-lg leading-relaxed text-gray-300">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing my knowledge through technical blog posts. I believe in continuous learning and staying 
                up-to-date with the latest industry trends.
              </p>
            </div>
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-blue-500/20 rounded-2xl blur-xl"
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 1.5,
              }}
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 transition-all duration-300 group-hover:border-blue-500/50">
                <motion.div
                  className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-blue-400">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
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
    </section>
  );
};

export default About;