import { useMovieContext } from '@/hooks/useMovieContext';
// import { Link } from 'react-router-dom';
// import { FcLike } from 'react-icons/fc';
import MovieCard from '../MovieCard/MovieCard';

const MovieList = () => {
  const { movies, loading } = useMovieContext();
  console.log(movies);
  return (
    <div className='container text-center'>
      <div className='row row-cols-4 justify-content-between'>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          movies.map((movie) => {
            <MovieCard movie={movie} />;
          })
        )}
      </div>
    </div>
  );
};
export default MovieList;
