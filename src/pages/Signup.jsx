import useForm from '@/hooks/useForm';
import { useNavigate } from 'react-router-dom';
import { registerUserService } from '@/services/userServices';
import '@/styles/form.css';

const Signup = () => {
  const navigate = useNavigate();

  const datos = {
    name: '',
    email: '',
    password: '',
  };

  const sendData = async (data) => {
    try {
      const response = await registerUserService(data);
      if (response.status === 201) {
        console.log('Usario creado exitosamente');
        navigate('/login');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const { input, handleInputChange, handleSubmit } = useForm(sendData, datos);

  return (
    <main className='form-signin w-100 m-auto'>
      <form onSubmit={handleSubmit}>
        <h1 className='h3 mb-3 fw-normal'>Please sign up</h1>
        <div className='form-floating'>
          <input
            type='name'
            className='form-control'
            id='floatingInput'
            placeholder='name'
            name='name'
            value={input.name}
            onChange={handleInputChange}
          />
          <label htmlFor='floatingInput'>Name</label>
        </div>
        <div className='form-floating'>
          <input
            type='email'
            className='form-control'
            id='floatingInput'
            placeholder='email@example.com'
            style={{ borderTopLeftRadius: '0', borderTopRightRadius: '0' }}
            name='email'
            value={input.email}
            onChange={handleInputChange}
          />
          <label htmlFor='floatingInput'>Email address</label>
        </div>
        <div className='form-floating'>
          <input
            type='password'
            className='form-control'
            id='floatingPassword'
            placeholder='Password'
            name='password'
            value={input.password}
            onChange={handleInputChange}
          />
          <label htmlFor='floatingPassword'>Password</label>
        </div>
        <button className='btn btn-primary w-100 py-2' type='submit'>
          Sign up
        </button>
        <p className='mt-5 mb-3 text-body-secondary'>© 2023</p>
      </form>
    </main>
  );
};
export default Signup;
