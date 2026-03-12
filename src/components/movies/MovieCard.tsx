
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Film, Heart, Play } from 'lucide-react';
import { Movie } from '@/data/movies';
import { addToFavorites, removeFromFavorites, isFavorite, addMovieView } from '@/utils/localStorage';
import { Button } from '@/components/ui/button';

interface MovieCardProps {
  id: number;
  title: string;
  year: number;
  genres: string[];
  poster?: string;
  rating?: number;
  movie?: Movie;
}

const MovieCard = ({
  id,
  title,
  year,
  genres,
  poster,
  rating,
  movie,
}: MovieCardProps) => {
  const [favorited, setFavorited] = useState(isFavorite(id));
  const [isHovered, setIsHovered] = useState(false);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (movie) {
      if (favorited) {
        removeFromFavorites(id);
        setFavorited(false);
      } else {
        addToFavorites(movie);
        setFavorited(true);
      }
    }
  };

  const handleCardClick = () => {
    addMovieView(id);
  };

  return (
    <Link to={`/movie/${id}`} className="block group" onClick={handleCardClick}>
      <div 
        className="movie-card-hover rounded-lg overflow-hidden bg-movie-card h-full flex flex-col transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-movie-blue/20"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="aspect-[2/3] bg-movie-darker relative overflow-hidden">
          {poster ? (
            <>
              <img
                src={poster}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
              
              {/* Play button overlay */}
              {isHovered && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-movie-blue/90 rounded-full p-3 transform transition-all duration-300 hover:scale-110">
                    <Play size={24} className="text-white ml-1" fill="white" />
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-white/30 bg-gradient-to-br from-movie-blue/20 to-movie-crimson/20">
              <Film size={32} />
            </div>
          )}
          
          {/* Rating Overlay */}
          {rating && (
            <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm rounded-full p-1 px-2 flex items-center">
              <Star size={14} className="text-movie-yellow mr-1" fill="currentColor" />
              <span className="text-xs font-medium">{rating.toFixed(1)}</span>
            </div>
          )}

          {/* Favorite Heart Button */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-2 left-2 p-2 bg-black/60 backdrop-blur-sm hover:bg-black/80 rounded-full transition-all duration-300"
            onClick={handleFavoriteClick}
          >
            <Heart 
              size={16} 
              className={`transition-all duration-300 ${
                favorited 
                  ? 'text-red-500 fill-red-500 scale-110' 
                  : 'text-white hover:text-red-400'
              }`}
            />
          </Button>
        </div>
        
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="font-semibold text-base mb-2 line-clamp-2 group-hover:text-movie-blue transition-colors duration-300">
            {title}
          </h3>
          <div className="flex justify-between items-center mt-auto text-xs text-white/60">
            <span className="font-medium">{year}</span>
            <span className="truncate ml-2 text-movie-yellow">
              {genres.slice(0, 2).join(' • ')}
            </span>
          </div>
          
          {/* Duration indicator if available */}
          {movie && (
            <div className="mt-2 text-xs text-white/50">
              {movie.duration} min • {movie.language}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
