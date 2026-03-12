
import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import MovieCard from '@/components/movies/MovieCard';
import { Movie, movies } from '@/data/movies';
import { addToSearchHistory } from '@/utils/localStorage';
import { Button } from '@/components/ui/button';

const ResultsPage = () => {
  const location = useLocation();
  const { fromSearch, fromQuiz, params, answers, recommendations } = location.state || {};
  const [displayMovies, setDisplayMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const loadMovies = async () => {
      setIsLoading(true);
      
      // Simulate loading delay for realistic feel
      await new Promise(resolve => setTimeout(resolve, 800));
      
      let resultMovies: Movie[] = [];
      
      if (fromQuiz && recommendations) {
        // Use quiz recommendations
        resultMovies = recommendations;
      } else if (fromSearch && params) {
        // Filter movies based on search params
        resultMovies = movies.filter(movie => {
          // Text search
          if (params.query) {
            const query = params.query.toLowerCase();
            const matchesQuery = movie.title.toLowerCase().includes(query) ||
              movie.cast.some(actor => actor.toLowerCase().includes(query)) ||
              movie.director.toLowerCase().includes(query);
            if (!matchesQuery) return false;
          }
          
          // Genre filter
          if (params.selectedGenres && params.selectedGenres.length > 0) {
            const hasMatchingGenre = movie.genres.some(genre => 
              params.selectedGenres.includes(genre)
            );
            if (!hasMatchingGenre) return false;
          }
          
          // Language filter
          if (params.selectedLanguage && params.selectedLanguage !== '') {
            if (movie.language !== params.selectedLanguage) return false;
          }
          
          // Year range filter
          if (params.yearRange) {
            const [minYear, maxYear] = params.yearRange;
            if (movie.year < minYear || movie.year > maxYear) return false;
          }
          
          return true;
        });
        
        // Add search query to history if it exists
        if (params.query) {
          addToSearchHistory(params.query);
        }
      } else {
        // Default: show all movies sorted by rating
        resultMovies = [...movies].sort((a, b) => b.rating - a.rating);
      }
      
      setDisplayMovies(resultMovies);
      setIsLoading(false);
    };
    
    loadMovies();
  }, [fromSearch, fromQuiz, params, answers, recommendations]);
  
  const getTitle = () => {
    if (fromQuiz) return "Your Personalized Movie Recommendations";
    if (fromSearch && params?.query) return `Search Results for "${params.query}"`;
    return "Movie Results";
  };
  
  const getSubtitle = () => {
    if (fromQuiz) return "Based on your quiz answers, these movies match your preferences";
    if (fromSearch && params?.selectedGenres?.length > 0) {
      return `Movies in: ${params.selectedGenres.join(', ')}`;
    }
    if (fromSearch) return "Matching your search criteria";
    return "Discover great movies";
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-6 py-12">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{getTitle()}</h1>
          <p className="text-white/70">{getSubtitle()}</p>
          {fromQuiz && displayMovies.length > 0 && (
            <div className="mt-4 text-sm text-movie-yellow">
              ✨ {displayMovies.length} personalized recommendations found
            </div>
          )}
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="bg-movie-card rounded-lg h-80 mb-4"></div>
                <div className="bg-movie-card h-4 rounded mb-2"></div>
                <div className="bg-movie-card h-3 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {displayMovies.map(movie => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                year={movie.year}
                genres={movie.genres}
                rating={movie.rating}
                poster={movie.poster}
                movie={movie}
              />
            ))}
          </div>
        )}
        
        {!isLoading && displayMovies.length === 0 && (
          <div className="text-center py-20">
            <div className="mb-6">
              <div className="text-6xl mb-4">🎬</div>
              <h2 className="text-2xl font-semibold mb-2">No movies found</h2>
              <p className="text-white/70 mb-6">
                {fromSearch 
                  ? "Try adjusting your search criteria or clearing some filters" 
                  : "Try taking the quiz for personalized recommendations"}
              </p>
              <div className="flex gap-4 justify-center">
                <Button asChild className="bg-movie-blue hover:bg-movie-blue/80">
                  <Link to="/search">Try Different Search</Link>
                </Button>
                <Button asChild variant="outline" className="border-movie-yellow text-movie-yellow hover:bg-movie-yellow/10">
                  <Link to="/quiz">Take Quiz</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ResultsPage;
