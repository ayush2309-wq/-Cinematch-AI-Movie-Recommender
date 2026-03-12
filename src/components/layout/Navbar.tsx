
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Film, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 px-6 md:px-10 fixed top-0 w-full z-50 dark:bg-movie-darker/80 light:bg-white/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Film size={28} className="text-movie-blue" />
            <span className="text-xl md:text-2xl font-bold font-montserrat text-gradient-blue">
              MovieMatch
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/search" className="text-foreground/80 hover:text-movie-blue transition-colors">
              Search
            </Link>
            <Link to="/quiz" className="text-foreground/80 hover:text-movie-blue transition-colors">
              Take Quiz
            </Link>
            <Link to="/login" className="text-foreground/80 hover:text-movie-blue transition-colors">
              Sign In
            </Link>
            <Button variant="default" className="bg-movie-blue hover:bg-movie-blue/80">
              <User size={18} className="mr-1" /> Account
            </Button>
            <ThemeToggle />
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              className="text-foreground p-1"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full dark:bg-movie-darker/95 light:bg-white/95 backdrop-blur-xl animate-fade-in border-b border-white/10">
          <div className="container mx-auto py-4 px-6 flex flex-col space-y-4">
            <Link 
              to="/search" 
              className="text-foreground/80 hover:text-movie-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Search
            </Link>
            <Link 
              to="/quiz" 
              className="text-foreground/80 hover:text-movie-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Take Quiz
            </Link>
            <Link 
              to="/login" 
              className="text-foreground/80 hover:text-movie-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </Link>
            <Link 
              to="/dashboard" 
              className="text-foreground/80 hover:text-movie-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              My Account
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
