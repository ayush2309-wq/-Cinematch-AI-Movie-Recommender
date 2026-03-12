
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Search as SearchIcon, Film, X } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import MovieCard from '@/components/movies/MovieCard';
import { getTrendingMovies } from '@/data/movies';

const SearchPage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useState({
    query: '',
    selectedGenres: [],
    selectedLanguage: '',
    yearRange: [1980, 2025],
  });
  
  // Mock data for filters
  const genres = [
    "Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary", 
    "Drama", "Fantasy", "Horror", "Musical", "Mystery", "Romance", 
    "Sci-Fi", "Thriller", "War", "Western"
  ];
  
  const languages = [
    "English", "Spanish", "French", "German", "Italian", "Japanese", 
    "Korean", "Chinese", "Russian", "Hindi", "Portuguese", "Arabic"
  ];
  
  // Get trending movies from our data
  const trendingMovies = getTrendingMovies();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to results with search parameters
    navigate('/results', { state: { fromSearch: true, params: searchParams } });
  };
  
  const handleYearRangeChange = (value: number[]) => {
    setSearchParams({
      ...searchParams,
      yearRange: value,
    });
  };
  
  const toggleGenre = (genre: string) => {
    setSearchParams(prev => {
      if (prev.selectedGenres.includes(genre)) {
        return {
          ...prev,
          selectedGenres: prev.selectedGenres.filter(g => g !== genre)
        };
      } else {
        return {
          ...prev,
          selectedGenres: [...prev.selectedGenres, genre]
        };
      }
    });
  };
  
  const toggleLanguage = (language: string) => {
    setSearchParams(prev => ({
      ...prev,
      selectedLanguage: prev.selectedLanguage === language ? '' : language
    }));
  };
  
  return (
    <Layout>
      <div className="relative min-h-[40vh] flex items-center overflow-hidden">
        {/* Background with Gradient Overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-b from-movie-dark/90 via-movie-dark/80 to-movie-dark"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Find Your Perfect Movie</h1>
            <p className="text-white/70 text-center mb-10">
              Use the filters below to discover movies that match your mood and preferences
            </p>
            
            <div className="glass-card p-8 rounded-xl">
              <form onSubmit={handleSearch} className="space-y-8">
                {/* Search Query */}
                <div className="relative">
                  <Input 
                    type="text"
                    placeholder="Search by title, actor, or director..."
                    className="bg-movie-darker border-white/20 pl-10 py-6 text-lg"
                    value={searchParams.query}
                    onChange={(e) => setSearchParams({...searchParams, query: e.target.value})}
                  />
                  <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" size={18} />
                </div>
                
                {/* Genre Chips */}
                <div className="space-y-2">
                  <Label>Genres</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {genres.map(genre => (
                      <Button
                        key={genre}
                        type="button"
                        variant={searchParams.selectedGenres.includes(genre) ? "default" : "outline"}
                        className={`rounded-full text-sm py-1 h-auto ${
                          searchParams.selectedGenres.includes(genre)
                            ? 'bg-movie-blue hover:bg-movie-blue/80'
                            : 'border-white/20 bg-transparent hover:bg-white/5'
                        }`}
                        onClick={() => toggleGenre(genre)}
                      >
                        {genre}
                        {searchParams.selectedGenres.includes(genre) && (
                          <X size={14} className="ml-1" />
                        )}
                      </Button>
                    ))}
                  </div>
                </div>
                
                {/* Language Chips */}
                <div className="space-y-2">
                  <Label>Language</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {languages.map(language => (
                      <Button
                        key={language}
                        type="button"
                        variant={searchParams.selectedLanguage === language ? "default" : "outline"}
                        className={`rounded-full text-sm py-1 h-auto ${
                          searchParams.selectedLanguage === language
                            ? 'bg-movie-crimson hover:bg-movie-crimson/80'
                            : 'border-white/20 bg-transparent hover:bg-white/5'
                        }`}
                        onClick={() => toggleLanguage(language)}
                      >
                        {language}
                      </Button>
                    ))}
                  </div>
                </div>
                
                {/* Year Range */}
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <Label>Release Year Range</Label>
                    <span className="text-sm text-white/70 bg-movie-card px-3 py-1 rounded-full">
                      {searchParams.yearRange[0]} - {searchParams.yearRange[1]}
                    </span>
                  </div>
                  <Slider
                    defaultValue={[1980, 2025]}
                    min={1920}
                    max={2025}
                    step={1}
                    value={searchParams.yearRange}
                    onValueChange={handleYearRangeChange}
                    className="py-4"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-movie-blue hover:bg-movie-blue/80 py-6 text-lg shadow-lg shadow-movie-blue/20"
                >
                  <SearchIcon size={18} className="mr-2" />
                  Find Movies
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trending Section with Improved Styling */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-8">Trending Now</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {trendingMovies.map((movie) => (
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
      </div>
    </Layout>
  );
};

export default SearchPage;
