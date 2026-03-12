
import React from 'react';
import { Link } from 'react-router-dom';
import { Film, Heart } from 'lucide-react';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

const Footer = () => {
  return (
    <footer className="dark:bg-movie-darker light:bg-gray-50 py-10 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <Film size={24} className="text-movie-blue" />
            <span className="text-xl font-bold font-montserrat text-gradient-blue">
              MovieMatch
            </span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
            <Link to="/search" className="text-foreground/70 hover:text-movie-blue transition-colors text-center md:text-left">
              Search Movies
            </Link>
            <Link to="/quiz" className="text-foreground/70 hover:text-movie-blue transition-colors text-center md:text-left">
              Take Quiz
            </Link>
            <Link to="/signup" className="text-foreground/70 hover:text-movie-blue transition-colors text-center md:text-left">
              Create Account
            </Link>
            <div className="flex justify-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 mt-6 text-center text-foreground/50 text-sm">
          <p>© 2025 MovieMatch. All rights reserved.</p>
          <p className="mt-2 flex items-center justify-center">
            Made with <Heart size={14} className="text-movie-crimson mx-1" /> by MovieMatch Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
