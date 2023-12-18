import { useMovieContext } from '@/hooks/useMovieContext';
import { Link } from 'react-router-dom';
import { FcLike } from 'react-icons/fc';
import './movieList.css';
// import { useState } from 'react';

const MovieList = () => {
  const { movies, loading, search } = useMovieContext();

  // const [position, setPosition] = useState(0); // Position state to keep track of slider movement

  // const moveSlider = (direction) => {
  //   const newPosition = direction === 'left' ? position + 1 : position - 1;
  //   setPosition(newPosition);
  // };

  return (
    <div className='container d-flex gap-5 justify-content-start'>
      <div className='row text-center'>
        <div className='container my-3 watchlist'>
          {/* <div className='slider-container'>
            <div
              className='slider'
              style={{ transform: `translateX(-${position * 100}%)` }}
            >
              <div className='slide'>Slide 1</div>
              <div className='slide'>Slide 2</div>
              <div className='slide'>Slide 3</div>
              <div className='slide'>Slide 4</div>
              <div className='slide'>Slide 5</div>
              <div className='slide'>Slide 6</div>
              <div className='slide'>Slide 7</div>
              <div className='slide'>Slide 8</div>
            </div>
            <button onClick={() => moveSlider('left')}>Previous</button>
            <button onClick={() => moveSlider('right')}>Next</button>
          </div> */}
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
