import { useState, createContext, useEffect } from 'react';
import { getAllMovies } from '@/services/moviesServices';

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovieData = async () => {
    try {
      const response = await getAllMovies();
      if (response.status === 200) {
        setLoading(false);
        setMovies(response.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchMovieData();
  }, []);

  const data = {
    movies,
    loading,
  };

  return <MovieContext.Provider value={data}>{children}</MovieContext.Provider>;
};
export { MovieProvider, MovieContext };
