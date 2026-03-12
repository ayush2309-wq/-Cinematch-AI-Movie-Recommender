
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Heart, Star, ArrowLeft, Book, User, Film } from 'lucide-react';
import { toast } from "sonner";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Mock movie data (in a real app, you'd fetch this based on the ID)
const mockMovieDetails = {
  id: 1,
  title: "The Adventure Begins",
  tagline: "Every journey starts with a single step",
  overview: "In a world where adventure awaits at every corner, one person's journey will change everything. Follow the protagonist as they navigate through uncharted territories, face unexpected challenges, and discover the true meaning of courage and friendship.",
  poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
  backdrop: "https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  releaseDate: "June 15, 2022",
  runtime: 124,
  rating: 8.2,
  genres: ["Action", "Adventure", "Fantasy"],
  cast: [
    { name: "John Smith", character: "Alex Ryder", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" },
    { name: "Emma Johnson", character: "Maya Stone", photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80" },
    { name: "Michael Brown", character: "Commander Ross", photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" },
    { name: "Sarah Davis", character: "Dr. Elena Cortez", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" },
    { name: "David Wilson", character: "Jake Mercer", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" }
  ],
  similarMovies: [
    {id: 101, title: "Mountain Quest", year: 2022, genres: ["Adventure", "Drama"], poster: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"},
    {id: 102, title: "Ocean Depths", year: 2021, genres: ["Adventure", "Sci-Fi"], poster: "https://images.unsplash.com/photo-1551244072-5d12893278ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"},
    {id: 103, title: "Desert Mirage", year: 2023, genres: ["Mystery", "Adventure"], poster: "https://images.unsplash.com/photo-1682686581551-867e0b208bd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"},
    {id: 104, title: "Arctic Voyage", year: 2022, genres: ["Adventure", "Thriller"], poster: "https://images.unsplash.com/photo-1517783999520-f068d7431a60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"},
    {id: 105, title: "Jungle Secrets", year: 2022, genres: ["Adventure", "Mystery"], poster: "https://images.unsplash.com/photo-1604934863921-0d37c225d8e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"},
  ]
};

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [isFavorite, setIsFavorite] = useState(false);
  
  // In a real app, you'd fetch movie details based on the ID
  const movie = mockMovieDetails;
  
  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    
    if (!isFavorite) {
      toast.success("Added to favorites!");
    } else {
      toast.info("Removed from favorites");
    }
  };
  
  return (
    <Layout>
      {/* Hero Section with Backdrop */}
      <section className="relative min-h-[70vh] flex items-end bg-movie-darker overflow-hidden">
        {/* Backdrop Image */}
        {movie.backdrop && (
          <div className="absolute inset-0 w-full h-full">
            <img 
              src={movie.backdrop} 
              alt={movie.title} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-movie-dark via-movie-dark/80 to-transparent z-10"></div>
        
        <div className="container mx-auto px-6 pb-16 relative z-20">
          <Link to="/results" className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={16} className="mr-1" />
            Back to results
          </Link>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Movie Poster */}
            <div className="w-full max-w-xs mx-auto md:mx-0 md:w-80 aspect-[2/3] rounded-xl overflow-hidden flex-shrink-0 shadow-xl shadow-black/50 transform hover:scale-105 transition-transform duration-300">
              {movie.poster ? (
                <img src={movie.poster} alt={movie.title} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-movie-darker">
                  <Book size={48} className="text-white/30" />
                </div>
              )}
            </div>
            
            {/* Movie Info */}
            <div className="flex-grow">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3">{movie.title}</h1>
              
              {movie.tagline && (
                <p className="text-white/70 text-xl italic mb-6">{movie.tagline}</p>
              )}
              
              <div className="flex flex-wrap gap-2 mb-8">
                {movie.genres.map(genre => (
                  <span 
                    key={genre} 
                    className="px-4 py-1.5 rounded-full bg-movie-blue/20 text-movie-blue text-sm font-medium"
                  >
                    {genre}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-8 text-white/80 mb-8">
                {movie.rating && (
                  <div className="flex items-center">
                    <Star size={22} className="text-movie-yellow mr-2 fill-movie-yellow" />
                    <span className="text-lg font-semibold">{movie.rating.toFixed(1)}</span>
                  </div>
                )}
                
                {movie.releaseDate && (
                  <div className="flex items-center">
                    <Calendar size={20} className="mr-2" />
                    <span>{movie.releaseDate}</span>
                  </div>
                )}
                
                {movie.runtime && (
                  <div className="flex items-center">
                    <Clock size={20} className="mr-2" />
                    <span>{Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m</span>
                  </div>
                )}
              </div>
              
              <Button
                onClick={handleToggleFavorite}
                className={`mb-8 py-2 px-6 ${
                  isFavorite 
                    ? 'bg-movie-crimson hover:bg-movie-crimson/80 shadow-lg shadow-movie-crimson/20' 
                    : 'bg-transparent border border-white/20 hover:bg-white/5'
                } transition-all duration-300`}
              >
                <Heart
                  size={18}
                  className={`mr-2 transition-all duration-300 ${isFavorite ? 'fill-white scale-110' : ''}`}
                />
                {isFavorite ? 'Saved to Favorites' : 'Save to Favorites'}
              </Button>
              
              <h2 className="text-xl font-semibold mb-4">Overview</h2>
              <p className="text-white/80 leading-relaxed text-lg">
                {movie.overview}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Cast Section */}
      <section className="py-16 bg-gradient-to-b from-movie-dark to-movie-darker">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-10">Top Cast</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {movie.cast.map((person, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-movie-card overflow-hidden mb-4 border-2 border-transparent group-hover:border-movie-blue transition-all duration-300 shadow-lg">
                  {person.photo ? (
                    <img src={person.photo} alt={person.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-movie-darker">
                      <User size={24} className="text-white/30" />
                    </div>
                  )}
                </div>
                <h3 className="font-medium text-base mb-1 group-hover:text-movie-blue transition-colors">{person.name}</h3>
                <p className="text-sm text-white/60">{person.character}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Similar Movies Section with Carousel */}
      <section className="py-16 bg-movie-darker">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-8">You May Also Like</h2>
          
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {movie.similarMovies && movie.similarMovies.map((similar) => (
                <CarouselItem key={similar.id} className="pl-4 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                  <Link to={`/movie/${similar.id}`} className="block">
                    <div className="movie-card-hover rounded-lg overflow-hidden bg-movie-card h-full flex flex-col">
                      <div className="aspect-[2/3] bg-movie-darker relative overflow-hidden">
                        {similar.poster ? (
                          <img 
                            src={similar.poster} 
                            alt={similar.title} 
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center text-white/30">
                            <Film size={32} />
                          </div>
                        )}
                      </div>
                      
                      <div className="p-4">
                        <h3 className="font-medium text-base mb-1">{similar.title}</h3>
                        <div className="flex justify-between items-center text-xs text-white/60">
                          <span>{similar.year}</span>
                          <span>{similar.genres.slice(0, 2).join(', ')}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 bg-movie-blue text-white border-none hover:bg-movie-blue/80" />
            <CarouselNext className="-right-4 bg-movie-blue text-white border-none hover:bg-movie-blue/80" />
          </Carousel>
        </div>
      </section>
    </Layout>
  );
};

export default MovieDetail;
