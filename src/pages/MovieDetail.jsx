import { useAuthContext } from '@/hooks/useAuthContext';
import { useEffect, useState } from 'react';
import {
  getMovieData,
  deleteMovie,
  updateMovie,
} from '@/services/moviesServices';
import { useMovieContext } from '@/hooks/useMovieContext';
import { useParams } from 'react-router-dom';
import { FcLike, FcDeleteRow } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

const MovieDetail = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  //const [likes, setLikes] = useState();
  const { userPayload } = useAuthContext();
  const navigate = useNavigate();
  const { likes, setLikes } = useMovieContext();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await getMovieData(id);
        if (response.status === 200) {
          setMovie(response.data);
          setLikes(response.data.vote_count);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovie();
  }, [id, setLikes]);

  const incrementLikes = () => {
    setLikes(likes + 1);
  };

  // const updateMovieLikes = async () => {
  //   try {
  //     const response = await movieLiked(id);
  //     if (response.status === 201) {
  //       setLikes(response.data.movieLiked.vote_count);
  //     }
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  const deleteMovieFromCatalog = async () => {
    try {
      const response = await deleteMovie(id);
      if (response.status === 200) {
        alert('Pelicula eliminada');
        navigate('/');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const updateMovieLikes = async () => {
      try {
        const newLikes = {
          vote_count: likes,
        };
        const response = await updateMovie(id, newLikes);
        if (response.status === 201) {
          console.log('liked');
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    updateMovieLikes();
  }, [likes, id]);

  return (
    <div className='container text-center' style={{ paddingTop: 20 }}>
      <div className='d-flex justify-content-between'>
        <div className='d-flex card'>
          <div
            className='row g-0 justify-content-start'
            style={{
              backgroundImage: `url(${movie?.backdrop_path})`,
              backgroundPosition: `left calc((50vw - 170px) - 340px) top`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className='col-md-4'>
              <img
                src={movie?.poster_path}
                className='img-fluid rounded-start'
                alt='movie poster'
              />
            </div>
            <div className='col-md-8 justify-content-end'>
              <div
                className='d-flex flex-column card-body'
                style={{
                  backgroundImage: `linear-gradient(to bottom right, rgb(184 179 179 / 93%), rgba(220.5, 220.5, 220.5, 0.84))`,
                  width: '100%',
                  height: '100%',
                }}
              >
                <h1 className='card-title'>{movie?.title}</h1>
                <div className='card-text align-content-center'>
                  <p className='text-body-secondary'>{movie?.release_date}</p>
                  <p>{movie?.overview}</p>
                </div>
                <div className='d-flex card-text justify-content-around'>
                  {userPayload?.role === 'ADMIN' ? (
                    <button onClick={deleteMovieFromCatalog}>
                      <FcDeleteRow
                        style={{
                          marginRight: '3px',
                          marginBottom: '5px',
                        }}
                      />
                      Delete
                    </button>
                  ) : (
                    <>
                      <a href='/'>Add to WatchList</a>
                      <button onClick={incrementLikes}>
                        <FcLike
                          style={{ marginRight: '3px', marginTop: '-5px' }}
                        />
                        {likes}
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieDetail;
