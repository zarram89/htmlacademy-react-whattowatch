export type Film = {
  id: number;
  title: string;
  posterImage: string;
  genre: Genre;
  year: number;
}

export type Promo = Omit<Film, 'id' | 'posterImage'>;

type Genre = 'Adventure' | 'Comedy' | 'Crime' | 'Documentary' | 'Drama' | 'Horror' | 'Kids & family' | 'Romance' | 'Sci-Fi' | 'Thriller' | 'Fantasy';
