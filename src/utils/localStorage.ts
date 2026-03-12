import { Movie } from '@/data/movies';

// Favorites management
export const getFavorites = (): Movie[] => {
  try {
    const favorites = localStorage.getItem('movieFavorites');
    return favorites ? JSON.parse(favorites) : [];
  } catch {
    return [];
  }
};

export const addToFavorites = (movie: Movie): void => {
  const favorites = getFavorites();
  const isAlreadyFavorite = favorites.some(fav => fav.id === movie.id);
  
  if (!isAlreadyFavorite) {
    const updatedFavorites = [...favorites, movie];
    localStorage.setItem('movieFavorites', JSON.stringify(updatedFavorites));
  }
};

export const removeFromFavorites = (movieId: number): void => {
  const favorites = getFavorites();
  const updatedFavorites = favorites.filter(movie => movie.id !== movieId);
  localStorage.setItem('movieFavorites', JSON.stringify(updatedFavorites));
};

export const isFavorite = (movieId: number): boolean => {
  const favorites = getFavorites();
  return favorites.some(movie => movie.id === movieId);
};

// Search history
export const getSearchHistory = (): string[] => {
  try {
    const history = localStorage.getItem('searchHistory');
    return history ? JSON.parse(history) : [];
  } catch {
    return [];
  }
};

export const addToSearchHistory = (query: string): void => {
  if (!query.trim()) return;
  
  const history = getSearchHistory();
  const updatedHistory = [query, ...history.filter(item => item !== query)].slice(0, 10);
  localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
};

// Quiz results
export interface QuizAnswers {
  mood: string;
  company: string;
  time: string;
  genre: string;
  era: string;
  language: string;
  theme: string;
}

export const saveQuizResult = (answers: QuizAnswers, recommendedMovies: Movie[]): void => {
  const result = {
    answers,
    recommendedMovies,
    timestamp: new Date().toISOString(),
  };
  
  const results = getQuizResults();
  const updatedResults = [result, ...results].slice(0, 5); // Keep last 5 results
  localStorage.setItem('quizResults', JSON.stringify(updatedResults));
};

export const getQuizResults = () => {
  try {
    const results = localStorage.getItem('quizResults');
    return results ? JSON.parse(results) : [];
  } catch {
    return [];
  }
};

// Movie views/popularity
export const addMovieView = (movieId: number): void => {
  try {
    const views = localStorage.getItem('movieViews');
    const viewCounts = views ? JSON.parse(views) : {};
    viewCounts[movieId] = (viewCounts[movieId] || 0) + 1;
    localStorage.setItem('movieViews', JSON.stringify(viewCounts));
  } catch {
    // Silently fail
  }
};

export const getMovieViews = (movieId: number): number => {
  try {
    const views = localStorage.getItem('movieViews');
    const viewCounts = views ? JSON.parse(views) : {};
    return viewCounts[movieId] || 0;
  } catch {
    return 0;
  }
};

// User preferences
export interface UserPreferences {
  favoriteGenres: string[];
  preferredLanguage: string;
  darkMode: boolean;
}

export const getUserPreferences = (): UserPreferences => {
  try {
    const prefs = localStorage.getItem('userPreferences');
    return prefs ? JSON.parse(prefs) : {
      favoriteGenres: [],
      preferredLanguage: 'English',
      darkMode: true
    };
  } catch {
    return {
      favoriteGenres: [],
      preferredLanguage: 'English',
      darkMode: true
    };
  }
};

export const saveUserPreferences = (preferences: UserPreferences): void => {
  localStorage.setItem('userPreferences', JSON.stringify(preferences));
}; 