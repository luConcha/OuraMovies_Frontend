import { FcLike } from 'react-icons/fc';
const MovieDetail = () => {
  return (
    <div className='container text-center'>
      <div className='d-flex justify-content-between'>
        <div className='d-flex card mb-3' style={{ minWidth: 540 }}>
          <div
            className='row g-0 justify-content-start'
            style={{
              backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/dAXSflkUKRfpzK74kRaovfK09Kx.jpg)`,
              backgroundPosition: `left calc((50vw - 170px) - 340px) top`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className='col-md-4'>
              <img
                src='https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oE7xtGDqZnr7tFHfwb8oM9iRW6H.jpg'
                className='img-fluid rounded-start'
                alt='...'
              />
            </div>
            <div className='col-md-8 justify-content-end'>
              <div
                className='card-body'
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(241.5, 199.5, 199.5, 1) calc((50vw - 170px) - 340px), rgba(241.5, 199.5, 199.5, 0.84) 50%, rgba(241.5, 199.5, 199.5, 0.84) 100%)`,
                  width: '100%',
                  height: '100%',
                }}
              >
                <h1 className='card-title'>Ballerina</h1>
                <p className='card-text'>
                  <p className='text-body-secondary'>2023-10-05</p>
                  Grieving the loss of a best friend she couldnt protect, an
                  ex-bodyguard sets out to fulfill her dear friends last wish:
                  sweet revenge.
                </p>
                <p className='card-text'>
                  <a href='/'>Add to WatchList</a>
                </p>
                <p className='card-text'>
                  <button>
                    <FcLike style={{ marginRight: '3px', marginTop: '-5px' }} />
                    3.6
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieDetail;
