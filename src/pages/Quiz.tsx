
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import QuizQuestion from '@/components/quiz/QuizQuestion';
import { Button } from '@/components/ui/button';
import { Film } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getMovieRecommendations, QuizAnswers } from '@/utils/quizEngine';
import { saveQuizResult } from '@/utils/localStorage';

// Define quiz questions and options with emojis and mood indicators
const quizQuestions = [
  {
    id: 'q1',
    question: 'What mood are you in today?',
    mood: 'happy',
    options: [
      { id: 'q1_a', text: 'I want to laugh and feel good', emoji: '😄' },
      { id: 'q1_b', text: 'I want to be on the edge of my seat', emoji: '😨' },
      { id: 'q1_c', text: 'I want to feel deep emotions', emoji: '💭' },
      { id: 'q1_d', text: 'I want to escape to another world', emoji: '✨' },
    ],
  },
  {
    id: 'q2',
    question: 'Who are you watching with?',
    mood: 'relaxed',
    options: [
      { id: 'q2_a', text: 'Just myself', emoji: '🧘' },
      { id: 'q2_b', text: 'With my partner', emoji: '❤️' },
      { id: 'q2_c', text: 'Family movie night', emoji: '👨‍👩‍👧' },
      { id: 'q2_d', text: 'With friends', emoji: '👯' },
    ],
  },
  {
    id: 'q3',
    question: 'How much time do you have?',
    mood: 'relaxed',
    options: [
      { id: 'q3_a', text: 'Under 90 minutes', emoji: '⏱️' },
      { id: 'q3_b', text: 'Around 2 hours', emoji: '🕒' },
      { id: 'q3_c', text: 'I\'m ready for a long epic (2.5+ hours)', emoji: '📅' },
      { id: 'q3_d', text: 'Time doesn\'t matter', emoji: '♾️' },
    ],
  },
  {
    id: 'q4',
    question: 'What genre are you craving?',
    mood: 'adventurous',
    options: [
      { id: 'q4_a', text: 'Action & Adventure', emoji: '💥' },
      { id: 'q4_b', text: 'Comedy', emoji: '😂' },
      { id: 'q4_c', text: 'Drama & Romance', emoji: '💔' },
      { id: 'q4_d', text: 'Sci-Fi & Fantasy', emoji: '🚀' },
      { id: 'q4_e', text: 'Thriller & Horror', emoji: '👻' },
      { id: 'q4_f', text: 'Documentary & True Stories', emoji: '📚' },
    ],
  },
  {
    id: 'q5',
    question: 'Do you prefer classic films or new releases?',
    mood: 'relaxed',
    options: [
      { id: 'q5_a', text: 'Classic films from before 2000', emoji: '🎞️' },
      { id: 'q5_b', text: 'Modern films (2000-2015)', emoji: '📀' },
      { id: 'q5_c', text: 'Recent releases (2015-present)', emoji: '🆕' },
      { id: 'q5_d', text: 'I don\'t have a preference', emoji: '🤷' },
    ],
  },
  {
    id: 'q6',
    question: 'What language would you prefer?',
    mood: 'adventurous',
    options: [
      { id: 'q6_a', text: 'English language only', emoji: '🇬🇧' },
      { id: 'q6_b', text: 'I\'m open to watching foreign films with subtitles', emoji: '🌍' },
      { id: 'q6_c', text: 'I prefer specific foreign languages', emoji: '💬' },
      { id: 'q6_d', text: 'No preference', emoji: '👌' },
    ],
  },
  {
    id: 'q7',
    question: 'Any specific themes you\'re interested in?',
    mood: 'intense',
    options: [
      { id: 'q7_a', text: 'Coming of age stories', emoji: '🌱' },
      { id: 'q7_b', text: 'Hero\'s journey', emoji: '🦸' },
      { id: 'q7_c', text: 'Overcoming adversity', emoji: '🏆' },
      { id: 'q7_d', text: 'Mystery and intrigue', emoji: '🔍' },
      { id: 'q7_e', text: 'Social commentary', emoji: '🗣️' },
      { id: 'q7_f', text: 'Just entertain me', emoji: '🍿' },
    ],
  },
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  
  const currentQuestion = quizQuestions[currentQuestionIndex];
  
  const handleSelectOption = (optionId: string) => {
    // Save the answer
    const newAnswers = { ...answers, [currentQuestion.id]: optionId };
    setAnswers(newAnswers);
    
    // Move to the next question or finish the quiz
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizComplete(true);
    }
  };
  
  const handleShowResults = async () => {
    setIsLoading(true);
    
    // Simulate loading time
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Convert answers to QuizAnswers format
    const quizAnswers: QuizAnswers = {
      mood: answers['q1'] || '',
      company: answers['q2'] || '', 
      time: answers['q3'] || '',
      genre: answers['q4'] || '',
      era: answers['q5'] || '',
      language: answers['q6'] || '',
      theme: answers['q7'] || ''
    };
    
    // Get recommendations
    const recommendations = getMovieRecommendations(quizAnswers);
    
    // Save to localStorage
    saveQuizResult(quizAnswers, recommendations);
    
    // Navigate to results with personalized movies
    navigate('/results', { 
      state: { 
        fromQuiz: true, 
        answers: quizAnswers,
        recommendations 
      } 
    });
  };
  
  const variants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  };
  
  return (
    <Layout>
      <div className="min-h-[80vh] py-12 flex items-center justify-center">
        <div className="container px-6">
          <AnimatePresence mode="wait">
            {!isQuizComplete ? (
              <motion.div
                key={currentQuestion.id}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={variants}
                transition={{ type: "tween", duration: 0.4 }}
                className="w-full"
              >
                <QuizQuestion
                  questionNumber={currentQuestionIndex + 1}
                  totalQuestions={quizQuestions.length}
                  question={currentQuestion.question}
                  options={currentQuestion.options}
                  onSelectOption={handleSelectOption}
                  mood={currentQuestion.mood as 'happy' | 'intense' | 'relaxed' | 'adventurous'}
                />
              </motion.div>
            ) : (
              <motion.div 
                className="text-center w-full max-w-2xl mx-auto"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={variants}
                transition={{ type: "tween", duration: 0.4 }}
              >
                <div className="glass-card p-10 rounded-xl bg-gradient-to-br from-movie-blue/20 to-transparent">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="w-24 h-24 mx-auto rounded-full bg-movie-blue/20 flex items-center justify-center mb-6 relative"
                  >
                    <Film size={42} className="text-movie-blue" />
                    <motion.div 
                      className="absolute inset-0 rounded-full border-2 border-movie-blue/50"
                      animate={{ scale: [1, 1.1, 1], opacity: [1, 0.8, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    />
                  </motion.div>
                  
                  <h2 className="text-3xl font-bold mb-4">Quiz Complete! 🎉</h2>
                  <p className="text-lg text-white/80 mb-8">
                    Based on your answers, we've found the perfect selection of movies just for you!
                  </p>
                  
                  <Button 
                    onClick={handleShowResults}
                    disabled={isLoading}
                    className="bg-movie-blue hover:bg-movie-blue/80 py-6 px-8 text-lg animate-glow-pulse disabled:opacity-50"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Finding Your Perfect Matches...
                      </>
                    ) : (
                      'Show My Movie Matches'
                    )}
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Layout>
  );
};

export default Quiz;
