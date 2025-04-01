import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 text-center text-gray-400 bg-gray-900/50">
      <div className="flex items-center justify-center gap-2">
        <span>Made with</span>
        <Heart className="w-5 h-5 text-red-500 animate-pulse" />
        <span>by [Your Name]</span>
      </div>
      <div className="mt-2">
        © {new Date().getFullYear()} All rights reserved
      </div>
    </footer>
  );
};

export default Footer;