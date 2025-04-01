import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, FileText, ChevronDown, Brain, Cpu, Network, Code2 } from 'lucide-react';

const Hero = () => {
  // Neural network nodes for background
  const nodes = Array(30).fill(null).map((_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    connections: Array(2).fill(null).map(() => Math.floor(Math.random() * 30))
  }));

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* AI-themed animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="relative h-full w-full">
          {/* Neural Network Animation */}
          <svg className="absolute inset-0 w-full h-full opacity-20">
            {nodes.map((node, i) => (
              <g key={i}>
                {node.connections.map((connection, j) => (
                  <motion.line
                    key={`${i}-${j}`}
                    x1={`${node.x}%`}
                    y1={`${node.y}%`}
                    x2={`${nodes[connection].x}%`}
                    y2={`${nodes[connection].y}%`}
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
                <motion.circle
                  cx={`${node.x}%`}
                  cy={`${node.y}%`}
                  r="1.5"
                  fill="#4F46E5"
                  initial={{ scale: 0 }}
                  animate={{
                    scale: [1, 1.5, 1],
                    transition: {
                      duration: 2,
                      delay: i * 0.1,
                      repeat: Infinity
                    }
                  }}
                />
              </g>
            ))}
          </svg>

          {/* Floating AI Icons */}
          {[Brain, Cpu, Network, Code2].map((Icon, index) => (
            <motion.div
              key={index}
              className="absolute"
              style={{
                left: `${Math.random() * 80 + 10}%`,
                top: `${Math.random() * 80 + 10}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 5 + index,
                repeat: Infinity,
                delay: index * 2,
              }}
            >
              <Icon className="w-8 h-8 text-blue-500/30" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 relative"
        >
          <div className="relative">
            <img
              src="https://drive.google.com/file/d/1Ndkf5cX2wyXt-aJPuNytgpDxnqKs6JJ_/view?usp=sharing"
              alt="Profile"
              className="rounded-full w-40 h-40 mx-auto shadow-[0_0_30px_rgba(59,130,246,0.5)]"
            />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-blue-500"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [1, 0, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500">
            Hi, I'm Anamika Ghosh
          </h1>
          <motion.div
            className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 opacity-30 blur-xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />
        </motion.div>

        <div className="text-xl md:text-2xl text-blue-400 mb-8 h-8 relative">
          <TypeAnimation
            sequence={[
              'AI Enthusiast',
              2000,
              'Web Developer',
              2000,
              'Problem Solver',
              2000,
            ]}
            repeat={Infinity}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-4"
        >
          <motion.a
            href="https://github.com/Anamikaghosh18"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800/80 backdrop-blur-sm text-white px-6 py-3 rounded-full transition-all duration-300"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(31, 41, 55, 0.9)' }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            GitHub
          </motion.a>
          <motion.a
            href="https://drive.google.com/file/d/1FMUY-g5iuaGk-6BB1PIImJW3UWznJoEt/view?usp=sharing"
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FileText className="w-5 h-5" />
            Resume
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-blue-400" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;