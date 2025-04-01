import { motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import CodingProfiles from './components/CodingProfiles';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <CodingProfiles />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;