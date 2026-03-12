export interface Movie {
  id: number;
  title: string;
  year: number;
  genres: string[];
  rating: number;
  poster: string;
  backdrop: string;
  description: string;
  director: string;
  cast: string[];
  duration: number;
  language: string;
  trailer?: string;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "Top Gun: Maverick",
    year: 2022,
    genres: ["Action", "Drama"],
    rating: 8.3,
    poster: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg",
    description: "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it.",
    director: "Joseph Kosinski",
    cast: ["Tom Cruise", "Jennifer Connelly", "Miles Teller", "Jon Hamm"],
    duration: 131,
    language: "English"
  },
  {
    id: 2,
    title: "Avatar: The Way of Water",
    year: 2022,
    genres: ["Action", "Adventure", "Sci-Fi"],
    rating: 7.6,
    poster: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",
    description: "Set more than a decade after the events of the first film, learn the story of the Sully family, the trouble that follows them, the lengths they go to keep each other safe, and the battles they fight to stay alive.",
    director: "James Cameron",
    cast: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver", "Stephen Lang"],
    duration: 192,
    language: "English"
  },
  {
    id: 3,
    title: "Black Panther: Wakanda Forever",
    year: 2022,
    genres: ["Action", "Adventure", "Drama"],
    rating: 6.7,
    poster: "https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
    description: "Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T'Challa's death.",
    director: "Ryan Coogler",
    cast: ["Letitia Wright", "Lupita Nyong'o", "Danai Gurira", "Winston Duke"],
    duration: 161,
    language: "English"
  },
  {
    id: 4,
    title: "Everything Everywhere All at Once",
    year: 2022,
    genres: ["Comedy", "Sci-Fi", "Action"],
    rating: 7.8,
    poster: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/rMvPXy8PUjj1o8o1pzgQbdNCsvj.jpg",
    description: "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save what's important to her by connecting with the lives she could have led in other universes.",
    director: "Daniel Kwan, Daniel Scheinert",
    cast: ["Michelle Yeoh", "Stephanie Hsu", "Ke Huy Quan", "Jamie Lee Curtis"],
    duration: 139,
    language: "English"
  },
  {
    id: 5,
    title: "The Batman",
    year: 2022,
    genres: ["Action", "Crime", "Drama"],
    rating: 7.8,
    poster: "https://image.tmdb.org/t/p/w500/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
    description: "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
    director: "Matt Reeves",
    cast: ["Robert Pattinson", "Zoë Kravitz", "Paul Dano", "Jeffrey Wright"],
    duration: 176,
    language: "English"
  },
  {
    id: 6,
    title: "Spider-Man: No Way Home",
    year: 2021,
    genres: ["Action", "Adventure", "Sci-Fi"],
    rating: 8.2,
    poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
    description: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
    director: "Jon Watts",
    cast: ["Tom Holland", "Zendaya", "Benedict Cumberbatch", "Jacob Batalon"],
    duration: 148,
    language: "English"
  },
  {
    id: 7,
    title: "Dune",
    year: 2021,
    genres: ["Action", "Adventure", "Drama", "Sci-Fi"],
    rating: 8.0,
    poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/iopYFB1b6Bh7FWZh3onQhph1sih.jpg",
    description: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people.",
    director: "Denis Villeneuve",
    cast: ["Timothée Chalamet", "Rebecca Ferguson", "Oscar Isaac", "Josh Brolin"],
    duration: 155,
    language: "English"
  },
  {
    id: 8,
    title: "No Time to Die",
    year: 2021,
    genres: ["Action", "Adventure", "Thriller"],
    rating: 7.3,
    poster: "https://image.tmdb.org/t/p/w500/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/u5Fp9GBy9W8fqkuGfLBuuoJf57Z.jpg",
    description: "Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
    director: "Cary Joji Fukunaga",
    cast: ["Daniel Craig", "Rami Malek", "Léa Seydoux", "Lashana Lynch"],
    duration: 163,
    language: "English"
  },
  {
    id: 9,
    title: "The French Dispatch",
    year: 2021,
    genres: ["Comedy", "Drama"],
    rating: 7.1,
    poster: "https://image.tmdb.org/t/p/w500/fnbjcRDYn6YviCcePDnGdyAkYsB.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/cksrJwbIORy1bApV5pWJu0eBPmY.jpg",
    description: "A love letter to journalists set in an outpost of an American newspaper in a fictional twentieth century French city that brings to life a collection of stories published in 'The French Dispatch Magazine'.",
    director: "Wes Anderson",
    cast: ["Bill Murray", "Frances McDormand", "Tilda Swinton", "Benicio del Toro"],
    duration: 107,
    language: "English"
  },
  {
    id: 10,
    title: "Encanto",
    year: 2021,
    genres: ["Animation", "Comedy", "Family"],
    rating: 7.2,
    poster: "https://image.tmdb.org/t/p/w500/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/3G1Q5xF40HkUBJXxt2DQgQzKTp5.jpg",
    description: "The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto.",
    director: "Jared Bush, Byron Howard",
    cast: ["Stephanie Beatriz", "María Cecilia Botero", "John Leguizamo"],
    duration: 102,
    language: "English"
  },
  {
    id: 11,
    title: "Knives Out",
    year: 2019,
    genres: ["Comedy", "Crime", "Drama"],
    rating: 7.9,
    poster: "https://image.tmdb.org/t/p/w500/pThyQovXQrw2m0s9x82twj48Jq4.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/BjNlBBTX5kn2GkVFLWfYRsUuznL.jpg",
    description: "A detective investigates the death of a patriarch of an eccentric, combative family.",
    director: "Rian Johnson",
    cast: ["Daniel Craig", "Chris Evans", "Ana de Armas", "Jamie Lee Curtis"],
    duration: 130,
    language: "English"
  },
  {
    id: 12,
    title: "Parasite",
    year: 2019,
    genres: ["Comedy", "Drama", "Thriller"],
    rating: 8.6,
    poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg",
    description: "All unemployed, Ki-taek and his family take peculiar interest in the wealthy and glamorous Parks, until they get entangled in an unexpected incident.",
    director: "Bong Joon Ho",
    cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong", "Choi Woo-shik"],
    duration: 132,
    language: "Korean"
  },
  {
    id: 13,
    title: "Joker",
    year: 2019,
    genres: ["Crime", "Drama", "Thriller"],
    rating: 8.4,
    poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
    description: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
    director: "Todd Phillips",
    cast: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz", "Frances Conroy"],
    duration: 122,
    language: "English"
  },
  {
    id: 14,
    title: "Avengers: Endgame",
    year: 2019,
    genres: ["Action", "Adventure", "Drama"],
    rating: 8.4,
    poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
    description: "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe.",
    director: "Anthony Russo, Joe Russo",
    cast: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth"],
    duration: 181,
    language: "English"
  },
  {
    id: 15,
    title: "Once Upon a Time in Hollywood",
    year: 2019,
    genres: ["Comedy", "Drama"],
    rating: 7.6,
    poster: "https://image.tmdb.org/t/p/w500/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/5P8SmMzSNYikXpxil6BYzJ16611.jpg",
    description: "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
    director: "Quentin Tarantino",
    cast: ["Leonardo DiCaprio", "Brad Pitt", "Margot Robbie", "Emile Hirsch"],
    duration: 161,
    language: "English"
  },
  {
    id: 16,
    title: "The Matrix",
    year: 1999,
    genres: ["Action", "Sci-Fi"],
    rating: 8.7,
    poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/fNG7i7RqMErkcqhohV2a6cV1Ehy.jpg",
    description: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
    director: "Lana Wachowski, Lilly Wachowski",
    cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss", "Hugo Weaving"],
    duration: 136,
    language: "English"
  },
  {
    id: 17,
    title: "Pulp Fiction",
    year: 1994,
    genres: ["Crime", "Drama"],
    rating: 8.9,
    poster: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/4cDFJr4HnXN5AdPw4AKrmLlMWdO.jpg",
    description: "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper.",
    director: "Quentin Tarantino",
    cast: ["John Travolta", "Samuel L. Jackson", "Uma Thurman", "Bruce Willis"],
    duration: 154,
    language: "English"
  },
  {
    id: 18,
    title: "The Shawshank Redemption",
    year: 1994,
    genres: ["Drama"],
    rating: 9.3,
    poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/iNh3BivHyg5sQRPP1KOkzguEX0H.jpg",
    description: "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden.",
    director: "Frank Darabont",
    cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler"],
    duration: 142,
    language: "English"
  },
  {
    id: 19,
    title: "Inception",
    year: 2010,
    genres: ["Action", "Sci-Fi", "Thriller"],
    rating: 8.8,
    poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
    description: "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: inception, the implantation of another person's idea into a target's subconscious.",
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Marion Cotillard", "Tom Hardy", "Elliot Page"],
    duration: 148,
    language: "English"
  },
  {
    id: 20,
    title: "Interstellar",
    year: 2014,
    genres: ["Adventure", "Drama", "Sci-Fi"],
    rating: 8.6,
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/pbrkL804c8yAv3zBZR4QPWZgYoD.jpg",
    description: "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Bill Irwin"],
    duration: 169,
    language: "English"
  }
];

export const getMovieById = (id: number): Movie | undefined => {
  return movies.find(movie => movie.id === id);
};

export const getMoviesByGenre = (genre: string): Movie[] => {
  return movies.filter(movie => 
    movie.genres.some(g => g.toLowerCase().includes(genre.toLowerCase()))
  );
};

export const searchMovies = (query: string): Movie[] => {
  const searchTerm = query.toLowerCase();
  return movies.filter(movie => 
    movie.title.toLowerCase().includes(searchTerm) ||
    movie.cast.some(actor => actor.toLowerCase().includes(searchTerm)) ||
    movie.director.toLowerCase().includes(searchTerm)
  );
};

export const getTrendingMovies = (): Movie[] => {
  // Return movies sorted by rating, released in the last 5 years
  return movies
    .filter(movie => movie.year >= 2019)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8);
}; 