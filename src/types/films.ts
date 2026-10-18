export type FilmType = {
  id: number;
  title: string;
  posterImage: string;
  genre: Genre;
  year: number;
}

export type FilmsType = FilmType[];

export type PromoFilmType = Omit<FilmType, 'id' | 'posterImage'>;

type Genre = 'Adventure' | 'Comedy' | 'Crime' | 'Documentary' | 'Drama' | 'Horror' | 'Kids & family' | 'Romance' | 'Sci-Fi' | 'Thriller' | 'Fantasy';
