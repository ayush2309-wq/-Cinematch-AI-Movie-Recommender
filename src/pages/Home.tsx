
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowRight, Search, User, Heart } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import MovieCard from '@/components/movies/MovieCard';
import { getTrendingMovies } from '@/data/movies';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState(getTrendingMovies());
  
  return (
    <Layout>
      <section className="hero-section relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Cinematic Background with Overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-r from-movie-dark/95 via-movie-dark/80 to-movie-dark/95"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-movie-dark via-transparent to-movie-dark/70"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Find the <span className="text-gradient-blue">perfect movie</span> for your mood
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl animate-fade-in">
              Search by genre or take a quiz to get personalized picks that match exactly what you want to watch tonight.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 w-full max-w-md mx-auto animate-fade-in">
              <Button 
                asChild
                className="bg-movie-blue hover:bg-movie-blue/80 font-medium text-base py-6 flex items-center flex-1 shadow-lg shadow-blue-500/20 animate-glow-pulse"
              >
                <Link to="/search">
                  <Search size={18} className="mr-2" />
                  Search Movies
                </Link>
              </Button>
              
              <Button 
                asChild
                className="bg-movie-yellow text-black hover:bg-movie-yellow/80 font-medium text-base py-6 flex items-center flex-1 shadow-lg shadow-yellow-500/20"
              >
                <Link to="/quiz">
                  Take the Quiz
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
            </div>

            <div className="mt-6 animate-fade-in">
              <Button 
                asChild 
                variant="outline" 
                className="border-white/20 hover:bg-white/5"
              >
                <Link to="/login">
                  <User size={16} className="mr-2" />
                  Sign In
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trending Movies Carousel Section */}
      <section className="py-16 bg-movie-darker">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Trending Now</h2>
            <Link to="/search" className="text-movie-blue hover:text-movie-blue/80 flex items-center font-medium">
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {trendingMovies.map((movie) => (
                <CarouselItem key={movie.id} className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                  <MovieCard
                    id={movie.id}
                    title={movie.title}
                    year={movie.year}
                    genres={movie.genres}
                    rating={movie.rating}
                    poster={movie.poster}
                    movie={movie}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 bg-movie-blue text-white border-none hover:bg-movie-blue/80" />
            <CarouselNext className="-right-4 bg-movie-blue text-white border-none hover:bg-movie-blue/80" />
          </Carousel>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="feature-section py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-xl animate-float relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-movie-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-16 h-16 rounded-full bg-movie-blue/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Search size={24} className="text-movie-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Find by Criteria</h3>
              <p className="text-white/70">
                Search for movies by genre, language, release year, and more to find exactly what you're looking for.
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-xl animate-float delay-100 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-movie-crimson/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-16 h-16 rounded-full bg-movie-crimson/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-movie-crimson">
                  <path d="M12 17.8L5.8 21 7 14.1 2 9.3l7-1L12 2l3 6.3 7 1-5 4.8 1.2 6.9-6.2-3.2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalized Quiz</h3>
              <p className="text-white/70">
                Take our quick, fun quiz and get tailored movie recommendations based on your mood and preferences.
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-xl animate-float delay-200 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-movie-yellow/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-16 h-16 rounded-full bg-movie-yellow/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart size={24} className="text-movie-yellow" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Save Favorites</h3>
              <p className="text-white/70">
                Create an account to save your favorite movies and get recommended similar titles to watch next.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta-section py-24 bg-gradient-to-br from-movie-darker via-movie-dark to-movie-darker">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to find your next favorite film?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Stop scrolling endlessly through streaming services. Let MovieMatch help you discover the perfect movie tonight.
          </p>
          <Button 
            asChild
            className="bg-movie-blue hover:bg-movie-blue/80 font-medium text-base py-6 px-8 shadow-lg shadow-movie-blue/20"
          >
            <Link to="/quiz">
              Start Your Movie Journey
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
