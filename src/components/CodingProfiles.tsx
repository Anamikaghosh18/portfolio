import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Award, Trophy, Brain, Cpu, Network } from 'lucide-react';
import { useState } from 'react';

const profiles = [
  {
    platform: "CodeChef",
    username: "Anamikaghosh18",
    stats: "4 Star",
    link: "https://www.codechef.com/users/anamikaghosh18",
    icon: Cpu,
    color: "#A52A2A"
  },
  
  {
    platform: "LeetCode",
    username: "Anamikaghosh18",
    stats: "500+ problems solved",
    link: "https://leetcode.com/Anamikaghosh18",
    icon: Code2,
    color: "#FFA116"
  },
  {
    platform: "CodeForces",
    username: "Anamikaghosh18",
    link: "https://codeforces.com/profile/Anamikaghosh18",
    icon: Trophy,
    color: "#1890FF"
  },
  {
    platform: "HackerRank",
    username: "anamika_vrishti1",
    link: "https://www.hackerrank.com/anamika_vrishti1",
    icon: Award,
    color: "#00EA64"
  },
  {
    platform: "GeeksForGeeks",
    username: "Anamikaghosh18",
    link: "https://auth.geeksforgeeks.org/user/Anamikaghosh18/profile",
    icon: Brain,
    color: "#FF5722"
  },
];

const CodingProfiles = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const nextProfile = () => {
    setActiveIndex((prev) => (prev + 1) % profiles.length);
  };

  const prevProfile = () => {
    setActiveIndex((prev) => (prev - 1 + profiles.length) % profiles.length);
  };

  // Neural network animation nodes
  const nodes = Array(20).fill(null).map((_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    connections: Array(3).fill(null).map(() => 
      Math.floor(Math.random() * 20)
    )
  }));

  return (
    <section id="coding-profiles" className="py-20 px-4 md:px-8 bg-gray-900/50 relative overflow-hidden">
      {/* Neural Network Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full">
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
                r="2"
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
      </div>

      <motion.div
        ref={ref}
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500">
          Coding Profiles
        </h2>

        <div className="relative">
          <motion.div
            className="flex justify-center items-center gap-8"
            animate={{ x: `${-activeIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {profiles.map((profile, index) => (
              <motion.div
                key={profile.platform}
                className={`flex-shrink-0 w-full md:w-96 perspective-1000 ${
                  index === activeIndex ? 'z-10' : 'z-0'
                }`}
                initial={false}
                animate={{
                  scale: index === activeIndex ? 1 : 0.8,
                  opacity: index === activeIndex ? 1 : 0.5
                }}
                whileHover={{ scale: index === activeIndex ? 1.05 : 0.8 }}
                onClick={() => {
                  if (index === activeIndex) {
                    setIsExpanded(!isExpanded);
                  } else {
                    setActiveIndex(index);
                  }
                }}
              >
                <div
                  className={`
                    bg-gray-800/80 backdrop-blur-xl rounded-2xl p-8
                    transform transition-all duration-500 cursor-pointer
                    border border-gray-700/50 hover:border-gray-600/50
                    ${isExpanded && index === activeIndex ? 'scale-105' : ''}
                    shadow-[0_0_15px_rgba(0,0,0,0.3)]
                    hover:shadow-[0_0_30px_rgba(79,70,229,0.3)]
                  `}
                  style={{
                    background: `radial-gradient(circle at center, rgba(${
                      index === activeIndex ? '79,70,229,0.1' : '0,0,0,0'
                    }), transparent)`
                  }}
                >
                  <div className="flex items-center justify-center mb-6">
                    <motion.div
                      animate={{
                        rotate: isExpanded && index === activeIndex ? 360 : 0
                      }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                    >
                      <profile.icon 
                        className="w-16 h-16"
                        style={{ color: profile.color }}
                      />
                    </motion.div>
                  </div>
                  <motion.div
                    animate={{
                      height: isExpanded && index === activeIndex ? 'auto' : '100%'
                    }}
                  >
                    <h3 className="text-2xl font-bold text-center mb-4" style={{ color: profile.color }}>
                      {profile.platform}
                    </h3>
                    <p className="text-gray-300 text-center mb-4">@{profile.username}</p>
                    <p className="text-center" style={{ color: profile.color }}>{profile.stats}</p>
                    {isExpanded && index === activeIndex && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-6"
                      >
                        <a
                          href={profile.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full py-3 text-center rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300"
                        >
                          View Profile
                        </a>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <motion.button
            onClick={prevProfile}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800/80 p-3 rounded-full hover:bg-gray-700/80 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Network className="w-6 h-6 transform rotate-180" />
          </motion.button>
          <motion.button
            onClick={nextProfile}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800/80 p-3 rounded-full hover:bg-gray-700/80 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Network className="w-6 h-6" />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {profiles.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  index === activeIndex ? 'bg-indigo-500 w-4' : 'bg-gray-600'
                } transition-all duration-300`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CodingProfiles;