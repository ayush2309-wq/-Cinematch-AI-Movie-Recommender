import { Movie, movies } from '@/data/movies';

export interface QuizAnswers {
  mood: string;
  company: string;
  time: string;
  genre: string;
  era: string;
  language: string;
  theme: string;
}

// Scoring weights for different factors
const WEIGHTS = {
  mood: 3,
  genre: 4,
  era: 2,
  language: 2,
  time: 1,
  company: 1,
  theme: 2
};

export const getMovieRecommendations = (answers: QuizAnswers): Movie[] => {
  // Score each movie based on quiz answers
  const scoredMovies = movies.map(movie => ({
    movie,
    score: calculateMovieScore(movie, answers)
  }));

  // Sort by score and return top recommendations
  return scoredMovies
    .sort((a, b) => b.score - a.score)
    .slice(0, 12)
    .map(item => item.movie);
};

const calculateMovieScore = (movie: Movie, answers: QuizAnswers): number => {
  let score = 0;

  // Mood scoring
  score += scoreMood(movie, answers.mood) * WEIGHTS.mood;
  
  // Genre scoring
  score += scoreGenre(movie, answers.genre) * WEIGHTS.genre;
  
  // Era scoring  
  score += scoreEra(movie, answers.era) * WEIGHTS.era;
  
  // Language scoring
  score += scoreLanguage(movie, answers.language) * WEIGHTS.language;
  
  // Time/Duration scoring
  score += scoreTime(movie, answers.time) * WEIGHTS.time;
  
  // Company scoring
  score += scoreCompany(movie, answers.company) * WEIGHTS.company;
  
  // Theme scoring
  score += scoreTheme(movie, answers.theme) * WEIGHTS.theme;

  return score;
};

const scoreMood = (movie: Movie, mood: string): number => {
  const moodMappings: Record<string, string[]> = {
    'q1_a': ['Comedy', 'Animation', 'Family'], // laugh and feel good
    'q1_b': ['Action', 'Thriller', 'Horror'], // edge of seat
    'q1_c': ['Drama', 'Romance'], // deep emotions
    'q1_d': ['Sci-Fi', 'Fantasy', 'Adventure'] // escape to another world
  };

  const targetGenres = moodMappings[mood] || [];
  const matchingGenres = movie.genres.filter(genre => 
    targetGenres.some(target => genre.includes(target))
  );
  
  return matchingGenres.length > 0 ? 1 : 0;
};

const scoreGenre = (movie: Movie, genre: string): number => {
  const genreMappings: Record<string, string[]> = {
    'q4_a': ['Action', 'Adventure'],
    'q4_b': ['Comedy'],
    'q4_c': ['Drama', 'Romance'],
    'q4_d': ['Sci-Fi', 'Fantasy'],
    'q4_e': ['Thriller', 'Horror'],
    'q4_f': ['Documentary']
  };

  const targetGenres = genreMappings[genre] || [];
  const matchingGenres = movie.genres.filter(genre => 
    targetGenres.some(target => genre.includes(target))
  );
  
  return matchingGenres.length > 0 ? 1 : 0;
};

const scoreEra = (movie: Movie, era: string): number => {
  const eraMappings: Record<string, [number, number]> = {
    'q5_a': [1900, 1999], // classic
    'q5_b': [2000, 2015], // modern
    'q5_c': [2016, 2025], // recent
    'q5_d': [1900, 2025]  // no preference
  };

  const [minYear, maxYear] = eraMappings[era] || [1900, 2025];
  return movie.year >= minYear && movie.year <= maxYear ? 1 : 0;
};

const scoreLanguage = (movie: Movie, language: string): number => {
  const languageMappings: Record<string, string[]> = {
    'q6_a': ['English'], // English only
    'q6_b': ['Korean', 'Japanese', 'Spanish', 'French'], // open to foreign
    'q6_c': ['Korean', 'Japanese', 'Spanish', 'French'], // prefers foreign
    'q6_d': ['English', 'Korean', 'Japanese', 'Spanish', 'French'] // no preference
  };

  const acceptedLanguages = languageMappings[language] || ['English'];
  return acceptedLanguages.includes(movie.language) ? 1 : 0;
};

const scoreTime = (movie: Movie, time: string): number => {
  const timeMappings: Record<string, [number, number]> = {
    'q3_a': [60, 90],   // under 90 minutes
    'q3_b': [90, 130],  // around 2 hours
    'q3_c': [150, 300], // long epic
    'q3_d': [60, 300]   // doesn't matter
  };

  const [minDuration, maxDuration] = timeMappings[time] || [60, 300];
  return movie.duration >= minDuration && movie.duration <= maxDuration ? 1 : 0;
};

const scoreCompany = (movie: Movie, company: string): number => {
  // Movies better suited for different viewing contexts
  const companyMappings: Record<string, (movie: Movie) => boolean> = {
    'q2_a': (movie) => { // alone
      return movie.genres.includes('Drama') || 
             movie.genres.includes('Thriller') ||
             movie.genres.includes('Sci-Fi');
    },
    'q2_b': (movie) => { // with partner
      return movie.genres.includes('Romance') || 
             movie.genres.includes('Drama') ||
             movie.genres.includes('Comedy');
    },
    'q2_c': (movie) => { // family
      return movie.genres.includes('Animation') || 
             movie.genres.includes('Family') ||
             movie.genres.includes('Adventure') ||
             movie.rating <= 7.5; // Generally family-friendly content
    },
    'q2_d': (movie) => { // friends
      return movie.genres.includes('Comedy') || 
             movie.genres.includes('Action') ||
             movie.genres.includes('Adventure');
    }
  };

  const scoringFunction = companyMappings[company];
  return scoringFunction ? (scoringFunction(movie) ? 1 : 0) : 0;
};

const scoreTheme = (movie: Movie, theme: string): number => {
  const themeMappings: Record<string, (movie: Movie) => boolean> = {
    'q7_a': (movie) => { // coming of age
      return movie.genres.includes('Drama') && movie.year >= 2000;
    },
    'q7_b': (movie) => { // hero's journey
      return movie.genres.includes('Adventure') || 
             movie.genres.includes('Action') ||
             movie.genres.includes('Fantasy');
    },
    'q7_c': (movie) => { // overcoming adversity
      return movie.genres.includes('Drama') || movie.rating >= 8.0;
    },
    'q7_d': (movie) => { // mystery and intrigue
      return movie.genres.includes('Thriller') || 
             movie.genres.includes('Crime') ||
             movie.title.toLowerCase().includes('mystery');
    },
    'q7_e': (movie) => { // social commentary
      return movie.genres.includes('Drama') && 
             (movie.year >= 2015 || movie.rating >= 8.5);
    },
    'q7_f': (movie) => { // just entertain
      return movie.genres.includes('Comedy') || 
             movie.genres.includes('Action') ||
             movie.genres.includes('Adventure');
    }
  };

  const scoringFunction = themeMappings[theme];
  return scoringFunction ? (scoringFunction(movie) ? 1 : 0) : 0;
};

// Helper function to get explanation for recommendations
export const getRecommendationReason = (movie: Movie, answers: QuizAnswers): string => {
  const reasons: string[] = [];

  // Check mood match
  const moodMatch = scoreMood(movie, answers.mood) > 0;
  if (moodMatch) {
    const moodDescriptions: Record<string, string> = {
      'q1_a': 'matches your desire to laugh and feel good',
      'q1_b': 'will keep you on the edge of your seat',
      'q1_c': 'offers deep emotional storytelling',
      'q1_d': 'provides an escape to another world'
    };
    reasons.push(moodDescriptions[answers.mood] || '');
  }

  // Check genre match
  const genreMatch = scoreGenre(movie, answers.genre) > 0;
  if (genreMatch) {
    reasons.push('fits your preferred genre');
  }

  // Check era match
  const eraMatch = scoreEra(movie, answers.era) > 0;
  if (eraMatch && answers.era !== 'q5_d') {
    reasons.push('from your preferred time period');
  }

  return reasons.length > 0 
    ? `This ${reasons.join(' and ')}.`
    : 'This movie has great ratings and fits your overall preferences.';
}; 