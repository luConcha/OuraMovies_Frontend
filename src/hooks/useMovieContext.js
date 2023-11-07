import { useContext } from 'react';
import { MovieContext } from '@/context/MovieContext';

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (context === undefined) {
    throw new Error('useMovieContext debe ser usado dentro de MovieProvider');
  }
  return context;
};
