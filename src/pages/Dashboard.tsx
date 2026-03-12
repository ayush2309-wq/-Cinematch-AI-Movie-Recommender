
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MovieCard from '@/components/movies/MovieCard';
import { LogOut, Star, Clock, User, Heart, X, ArrowUp, ArrowDown } from 'lucide-react';
import { toast } from "sonner";
import { ScrollArea } from "@/components/ui/scroll-area";

// Mock favorite movies
const mockFavorites = [
  {
    id: 101,
    title: "The Adventure Begins",
    year: 2022,
    genres: ["Action", "Adventure"],
    rating: 8.2,
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80"
  },
  {
    id: 102,
    title: "Midnight Mystery",
    year: 2023,
    genres: ["Thriller", "Mystery"],
    rating: 7.9,
    poster: "https://images.unsplash.com/photo-1505225248253-323b1b1200a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    id: 103,
    title: "Beyond the Stars",
    year: 2020,
    genres: ["Sci-Fi", "Adventure"],
    rating: 8.5,
    poster: "https://images.unsplash.com/photo-1544656376-ffe19d4b7353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  },
  {
    id: 104,
    title: "The Laughing Detective",
    year: 2022,
    genres: ["Comedy", "Crime"],
    rating: 7.1,
    poster: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  }
];

// Mock quiz history
const mockQuizHistory = [
  {
    id: 1,
    date: "May 2, 2025",
    criteria: "Mood: Excited, Genre: Action, Era: Recent",
    movieCount: 5
  },
  {
    id: 2,
    date: "Apr 25, 2025",
    criteria: "Mood: Relaxed, Genre: Comedy, Era: Classic",
    movieCount: 8
  }
];

const Dashboard = () => {
  const [favorites, setFavorites] = useState(mockFavorites);
  
  const handleRemoveFavorite = (movieId: number) => {
    setFavorites(favorites.filter(movie => movie.id !== movieId));
    toast.success("Movie removed from favorites");
  };
  
  const moveMovie = (index: number, direction: 'up' | 'down') => {
    if ((direction === 'up' && index === 0) || 
        (direction === 'down' && index === favorites.length - 1)) {
      return;
    }
    
    const newFavorites = [...favorites];
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    const movie = newFavorites[index];
    
    // Remove the movie from its current position
    newFavorites.splice(index, 1);
    // Insert at the new position
    newFavorites.splice(newIndex, 0, movie);
    
    setFavorites(newFavorites);
    toast.success(`${movie.title} moved ${direction}`);
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">My Dashboard</h1>
            <p className="text-white/70 text-lg">Manage your movie preferences and saved content</p>
          </div>
          
          <Button variant="outline" className="border-white/20 hover:bg-white/5">
            <LogOut size={16} className="mr-2" />
            Sign Out
          </Button>
        </div>
        
        <div className="glass-card p-8 rounded-xl mb-10 bg-gradient-to-br from-movie-blue/10 to-transparent">
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-movie-blue to-movie-crimson p-1 shadow-lg shadow-movie-blue/20">
              <div className="w-full h-full rounded-full bg-movie-dark flex items-center justify-center overflow-hidden">
                <User size={36} className="text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">John Doe</h2>
              <p className="text-white/70">john.doe@example.com</p>
              <div className="flex gap-4 mt-3">
                <p className="text-sm px-3 py-1 rounded-full bg-movie-card">
                  <span className="text-white/50">Member since </span> 
                  <span className="font-medium">April 2025</span>
                </p>
                <p className="text-sm px-3 py-1 rounded-full bg-movie-card">
                  <span className="font-medium">{favorites.length}</span>
                  <span className="text-white/50"> favorites</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="favorites" className="w-full">
          <TabsList className="mb-8 bg-movie-darker">
            <TabsTrigger value="favorites" className="data-[state=active]:bg-movie-blue">
              <Heart size={16} className="mr-2" />
              Saved Favorites
            </TabsTrigger>
            <TabsTrigger value="history" className="data-[state=active]:bg-movie-blue">
              <Clock size={16} className="mr-2" />
              Quiz History
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="favorites">
            <div className="mb-4 flex justify-between items-center">
              <h3 className="text-xl font-semibold">Your Favorite Movies</h3>
              <span className="text-white/70 text-sm bg-movie-card px-3 py-1 rounded-full">
                {favorites.length} movies
              </span>
            </div>
            
            {favorites.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {favorites.map((movie, index) => (
                  <div key={movie.id} className="relative group">
                    <MovieCard
                      id={movie.id}
                      title={movie.title}
                      year={movie.year}
                      genres={movie.genres}
                      rating={movie.rating}
                      poster={movie.poster}
                    />
                    
                    {/* Control Buttons Overlay */}
                    <div className="absolute top-2 right-2 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => handleRemoveFavorite(movie.id)}
                        className="bg-black/70 hover:bg-movie-crimson p-1.5 rounded-full transition-colors"
                        aria-label="Remove from favorites"
                      >
                        <X size={16} />
                      </button>
                      
                      <button
                        onClick={() => moveMovie(index, 'up')}
                        disabled={index === 0}
                        className={`p-1.5 rounded-full transition-colors ${
                          index === 0 ? 'bg-black/40 cursor-not-allowed' : 'bg-black/70 hover:bg-movie-blue'
                        }`}
                        aria-label="Move up"
                      >
                        <ArrowUp size={16} />
                      </button>
                      
                      <button
                        onClick={() => moveMovie(index, 'down')}
                        disabled={index === favorites.length - 1}
                        className={`p-1.5 rounded-full transition-colors ${
                          index === favorites.length - 1 ? 'bg-black/40 cursor-not-allowed' : 'bg-black/70 hover:bg-movie-blue'
                        }`}
                        aria-label="Move down"
                      >
                        <ArrowDown size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
                  <Star size={24} className="text-white/30" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No favorites yet</h3>
                <p className="text-white/70 mb-6">Start exploring movies and save your favorites</p>
                <Button asChild>
                  <Link to="/search">
                    Explore Movies
                  </Link>
                </Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="history">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Your Quiz History</h3>
              
              <ScrollArea className="h-[400px] rounded-md border border-white/10 p-4">
                {mockQuizHistory.map(item => (
                  <div 
                    key={item.id} 
                    className="bg-gradient-to-r from-movie-card to-movie-card/80 border border-white/10 rounded-lg p-6 mb-4 hover:border-movie-blue/40 transition-colors"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                      <div>
                        <p className="font-medium text-lg flex items-center">
                          <Clock size={18} className="mr-2 text-movie-blue" />
                          {item.date}
                        </p>
                        <p className="text-sm text-white/70 mt-2">{item.criteria}</p>
                      </div>
                      <div className="flex flex-col md:items-end gap-2">
                        <span className="text-sm px-3 py-1 rounded-full bg-movie-darker inline-block">
                          {item.movieCount} movies
                        </span>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="h-8 text-movie-blue hover:text-movie-blue hover:bg-movie-blue/10"
                          asChild
                        >
                          <Link to="/results">View Results</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </ScrollArea>
              
              <div className="mt-8 text-center">
                <Button asChild className="bg-movie-blue hover:bg-movie-blue/80 shadow-lg shadow-movie-blue/20">
                  <Link to="/quiz">Take a New Quiz</Link>
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Dashboard;
