import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:your.email@example.com",
      color: "#3B82F6",
      label: "Email"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/yourusername",
      color: "#0A66C2",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com/yourusername",
      color: "#6E7681",
      label: "GitHub"
    },
    {
      icon: Twitter,
      href: "https://twitter.com/yourusername",
      color: "#1DA1F2",
      label: "Twitter"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Neural network background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full">
          {Array(15).fill(null).map((_, i) => (
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
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500">
          Get In Touch
        </h2>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl mb-12 text-gray-300"
        >
          I'm always open to new opportunities and collaborations.
          Let's create something amazing together!
        </motion.p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="group relative"
            >
              <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 transition-all duration-300 group-hover:border-blue-500/50">
                <div className="relative">
                  <link.icon 
                    className="w-8 h-8 mx-auto mb-3 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: link.color }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: `${link.color}20` }}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                </div>
                <p className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300">
                  {link.label}
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
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative group"
        >
          <div className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 transition-all duration-300 group-hover:border-blue-500/50">
            <p className="text-xl text-blue-400 mb-4">Direct Message</p>
            <p className="text-gray-300">
              Feel free to reach out through any of the social platforms above
              or send me an email at{' '}
              <a
                href="mailto:your.email@example.com"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                your.email@example.com
              </a>
            </p>
          </div>
          <motion.div
            className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;