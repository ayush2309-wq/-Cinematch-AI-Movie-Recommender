
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';
import { useTheme } from '@/providers/ThemeProvider';
import { motion } from 'framer-motion';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Toggle 
      pressed={theme === 'light'} 
      onPressedChange={toggleTheme}
      aria-label="Toggle theme"
      className="relative h-9 w-9 rounded-md border border-white/10 hover:bg-white/5"
    >
      <motion.div 
        initial={false} 
        animate={{ rotate: theme === 'light' ? 0 : 180 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-center"
      >
        {theme === 'light' ? (
          <Sun className="h-5 w-5 text-amber-300" />
        ) : (
          <Moon className="h-5 w-5 text-blue-300" />
        )}
      </motion.div>
    </Toggle>
  );
};
