import { useAuthContext } from '@/hooks/useAuthContext';
import { createMovie } from '@/services/moviesServices';
import useForm from '@/hooks/useForm';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const { userPayload } = useAuthContext();
  const navigate = useNavigate();

  const datos = {
    backdrop_path: '',
    original_language: '',
    original_title: '',
    overview: '',
    popularity: '',
    poster_path: '',
    release_date: '',
    title: '',
    video: '',
    vote_average: '',
    vote_count: '',
  };

  const sendData = async (data) => {
    try {
      const newDatos = {
        backdrop_path: data.backdrop_path,
        original_language: data.original_language,
        original_title: data.original_title,
        overview: data.overview,
        popularity: data.popularity,
        poster_path: data.poster_path,
        release_date: data.release_date,
        title: data.title,
        video: data.video,
        vote_average: data.vote_average,
        vote_count: data.vote_count,
      };
      console.log(newDatos);
      const response = await createMovie(newDatos);
      if (response.status === 201) {
        console.log('Pelicula creada exitosamente');
        navigate('/');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const { input, handleInputChange, handleSubmit } = useForm(sendData, datos);

  return (
    <>
      {userPayload?.role === 'ADMIN' ? (
        <div
          className='row justify-content-md-center'
          style={{ paddingTop: 20 }}
        >
          <div className='col-sm-6'>
            <div className='card'>
              <div className='card-header'>Create new movie</div>
              <div className='card-body'>
                <form onSubmit={handleSubmit}>
                  <div className='input-group mb-3'>
                    <input
                      type='text'
                      className='form-control'
                      id='original_title'
                      name='original_title'
                      placeholder='original_title'
                      value={input.original_title}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className='input-group mb-3'>
                    <input
                      type='text'
                      className='form-control'
                      id='title'
                      name='title'
                      placeholder='title'
                      value={input.title}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className='input-group mb-3'>
                    <textarea
                      className='form-control'
                      id='overview'
                      name='overview'
                      rows={3}
                      placeholder='overview'
                      value={input.overview}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className='input-group mb-3'>
                    <input
                      type='text'
                      className='form-control'
                      id='release_date'
                      name='release_date'
                      placeholder='release_date'
                      value={input.release_date}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className='input-group mb-3'>
                    <input
                      type='text'
                      className='form-control'
                      id='original_language'
                      name='original_language'
                      placeholder='original_language'
                      value={input.original_language}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className='input-group mb-3'>
                    <input
                      type='text'
                      className='form-control'
                      id='poster_path'
                      name='poster_path'
                      placeholder='poster_path'
                      value={input.poster_path}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className='input-group mb-3'>
                    <input
                      type='text'
                      className='form-control'
                      id='backdrop_path'
                      name='backdrop_path'
                      placeholder='background photo'
                      value={input.backdrop_path}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className='input-group mb-3'>
                    <input
                      type='text'
                      className='form-control'
                      id='video'
                      name='video'
                      placeholder='video'
                      value={input.video}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className='input-group mb-3'>
                    <input
                      type='text'
                      className='form-control'
                      id='popularity'
                      name='popularity'
                      placeholder='popularity'
                      value={input.popularity}
                      onChange={handleInputChange}
                    />
                  </div>
                  <button className='w-100 btn btn-success' type='submit'>
                    Create
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2>Access denied</h2>
      )}
    </>
  );
};
export default Admin;
