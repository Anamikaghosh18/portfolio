import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
//     setActiveIndex((prev) => (prev - 1 + profiles.length) % profiles.length);
const Footer = () => {
  return (
    <footer className="py-8 text-center text-gray-400 bg-gray-900/50">
      <div className="flex items-center justify-center gap-2">
        
        <span>Made by Anamika Ghosh</span>
      </div>
      <div className="mt-2">
        © {new Date().getFullYear()} All rights reserved
      </div>
    </footer>
  );
};

export default Footer;