import { useState, createContext, useEffect } from 'react';
import { getAllMovies } from '@/services/moviesServices';

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [likes, setLikes] = useState();
  //const [movie, setMovie] = useState({});

  const fetchMovieData = async () => {
    try {
      const response = await getAllMovies();
      if (response.status === 200) {
        console.log(response);
        setLoading(false);
        setMovies(response.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // const fetchMovie = async (id) => {
  //   try {
  //     const response = await getMovieData(id);
  //     if (response.status === 200) {
  //       setMovie(response.data);
  //       setLikes(response.data.vote_count);
  //     }
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  useEffect(() => {
    fetchMovieData();
  }, [search, likes]);

  // useEffect(() => {
  //   fetchMovie();
  // }, [likes]);

  const data = {
    movies,
    loading,
    setSearch,
    search,
    likes,
    setLikes,
  };

  return <MovieContext.Provider value={data}>{children}</MovieContext.Provider>;
};
export { MovieProvider, MovieContext };
