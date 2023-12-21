import { useMovieContext } from '@/hooks/useMovieContext';
//import { useWatchListContext } from '@/hooks/useWatchListContext';
import { useAuthContext } from '@/hooks/useAuthContext';
import { Link } from 'react-router-dom';
import { FcLike } from 'react-icons/fc';
import './movieList.css';
import { useState } from 'react';

const MovieList = () => {
  const { movies, loading, search } = useMovieContext();
  //const { watchList } = useWatchListContext();
  const { userPayload } = useAuthContext();

  const [position, setPosition] = useState(0); // Position state to keep track of slider movement

  const moveSlider = (direction) => {
    const newPosition = direction === 'left' ? position + 1 : position - 1;
    setPosition(newPosition);
  };

  return (
    <div className='container d-flex gap-5 justify-content-start'>
      <div className='row text-center'>
        <div className='container my-3'>
          {userPayload?.role === 'CUSTOMER' ? (
            <div className='slider-container'>
              <div
                className='slider'
                style={{
                  transform: `translateX(-${position * 100}%)`,
                }}
              >
                {/* {watchList?.map((movie) => {
                <div className='slide'>{movie?.movie}</div>;
              })} */}
                <div className='slide'>
                  <img
                    style={{
                      width: '170px',
                      height: '240px',
                      marginTop: '10px',
                      marginBottom: '10px',
                      borderRadius: '25px',
                      cursor: 'pointer',
                    }}
                    src='https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1Xgjl22MkAZQUavvOeBqRehrvqO.jpg'
                    alt=''
                  />
                </div>
                <div className='slide'>
                  <img
                    style={{
                      width: '170px',
                      height: '240px',
                      marginTop: '10px',
                      marginBottom: '10px',
                      borderRadius: '25px',
                      cursor: 'pointer',
                    }}
                    src='https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tPyj6Gii1HrnzCbJXEF7JdSFkQ8.jpg'
                    alt=''
                  />
                </div>
                <div className='slide'>
                  <img
                    style={{
                      width: '170px',
                      height: '240px',
                      marginTop: '10px',
                      marginBottom: '10px',
                      borderRadius: '25px',
                      cursor: 'pointer',
                    }}
                    src='https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg'
                    alt=''
                  />
                </div>
                <div className='slide'>
                  <img
                    style={{
                      width: '170px',
                      height: '240px',
                      marginTop: '10px',
                      marginBottom: '10px',
                      borderRadius: '25px',
                      cursor: 'pointer',
                    }}
                    src='https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oE7xtGDqZnr7tFHfwb8oM9iRW6H.jpg'
                    alt=''
                  />
                </div>
                <div className='slide'>
                  <img
                    style={{
                      width: '170px',
                      height: '240px',
                      marginTop: '10px',
                      marginBottom: '10px',
                      borderRadius: '25px',
                      cursor: 'pointer',
                    }}
                    src='https://www.themoviedb.org/t/p/w600_and_h900_bestv2/aTvePCU7exLepwg5hWySjwxojQK.jpg'
                    alt=''
                  />
                </div>
                <div className='slide'>
                  <img
                    style={{
                      width: '170px',
                      height: '240px',
                      marginTop: '10px',
                      marginBottom: '10px',
                      borderRadius: '25px',
                      cursor: 'pointer',
                    }}
                    src='https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1Xgjl22MkAZQUavvOeBqRehrvqO.jpg'
                    alt=''
                  />
                </div>
                <div className='slide'>
                  <img
                    style={{
                      width: '170px',
                      height: '240px',
                      marginTop: '10px',
                      marginBottom: '10px',
                      borderRadius: '25px',
                      cursor: 'pointer',
                    }}
                    src='https://www.themoviedb.org/t/p/w600_and_h900_bestv2/aQPeznSu7XDTrrdCtT5eLiu52Yu.jpg'
                    alt=''
                  />
                </div>
                <div className='slide'>
                  <img
                    style={{
                      width: '170px',
                      height: '240px',
                      marginTop: '10px',
                      marginBottom: '10px',
                      borderRadius: '25px',
                      cursor: 'pointer',
                    }}
                    src='https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg'
                    alt=''
                  />
                </div>
              </div>
              <button onClick={() => moveSlider('left')}>Previous</button>
              <button onClick={() => moveSlider('right')}>Next</button>
            </div>
          ) : null}
        </div>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          movies
            .filter((movie) => {
              if (search === '' && movie.active) {
                return movie;
              } else if (
                movie.title.toLowerCase().includes(search.toLowerCase())
              ) {
                return movie;
              }
              return null;
            })
            .map((movie) => {
              return (
                <Link
                  key={movie?._id}
                  className='col text-decoration-none'
                  to={`/movie/${movie?._id}`}
                >
                  <div
                    className='card'
                    style={{
                      width: '290px',
                      height: '485px',
                      marginTop: '10px',
                    }}
                  >
                    <img
                      src={movie?.poster_path}
                      className='card-img-top'
                      alt='...'
                      style={{ height: '400px' }}
                    />
                    <div className='card-body'>
                      <div className='d-flex justify-content-between'>
                        <p className='fs-6 lh-1 justify-content-start card-title text-wrap'>
                          {movie?.title}
                        </p>
                      </div>
                      <p className='card-text'>
                        <span className='d-flex justify-content-end'>
                          <FcLike
                            style={{ marginRight: '3px', marginTop: '2px' }}
                          />
                          {movie?.vote_count}
                        </span>
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })
        )}
      </div>
    </div>
  );
};
export default MovieList;
