
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface QuestionOption {
  id: string;
  text: string;
  emoji?: string;
}

interface QuizQuestionProps {
  questionNumber: number;
  totalQuestions: number;
  question: string;
  options: QuestionOption[];
  onSelectOption: (optionId: string) => void;
  mood?: 'happy' | 'intense' | 'relaxed' | 'adventurous';
}

// Mood-based colors for background gradients
const moodColors = {
  happy: 'from-yellow-500/10 to-orange-500/5',
  intense: 'from-red-500/10 to-purple-500/5',
  relaxed: 'from-blue-400/10 to-teal-500/5',
  adventurous: 'from-green-500/10 to-blue-500/5',
};

const defaultMoodColor = 'from-movie-blue/10 to-movie-blue/5';

const QuizQuestion = ({
  questionNumber,
  totalQuestions,
  question,
  options,
  onSelectOption,
  mood
}: QuizQuestionProps) => {
  const progressPercentage = (questionNumber / totalQuestions) * 100;
  const remainingQuestions = totalQuestions - questionNumber;
  
  // Use the mood color if it exists, otherwise use default
  const gradientColor = mood && moodColors[mood] ? moodColors[mood] : defaultMoodColor;
  
  return (
    <motion.div 
      className={`quiz-question w-full max-w-2xl mx-auto glass-card p-10 rounded-2xl bg-gradient-to-br ${gradientColor}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Progress bar */}
      <div className="mb-10">
        <div className="flex justify-between mb-2 text-sm text-white/70">
          <span className="font-medium">Question {questionNumber} of {totalQuestions}</span>
          <span>
            {remainingQuestions > 0 
              ? `${remainingQuestions} question${remainingQuestions > 1 ? 's' : ''} remaining` 
              : 'Almost done!'}
          </span>
        </div>
        <div className="h-2.5 w-full bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-movie-blue rounded-full"
            initial={{ width: `${(questionNumber - 1) / totalQuestions * 100}%` }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      </div>
      
      {/* Question */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">{question}</h2>
      
      {/* Options */}
      <div className="flex flex-col space-y-3">
        {options.map((option, index) => (
          <motion.div
            key={option.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Button
              onClick={() => onSelectOption(option.id)}
              className="bg-movie-card hover:bg-movie-blue/20 border border-white/10 text-white py-6 text-lg justify-start px-6 transition-all hover:border-movie-blue h-auto w-full group"
              variant="outline"
            >
              <div className="flex items-center w-full">
                {option.emoji && (
                  <span className="text-2xl mr-3 group-hover:scale-110 transition-transform">{option.emoji}</span>
                )}
                <span>{option.text}</span>
              </div>
            </Button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default QuizQuestion;
