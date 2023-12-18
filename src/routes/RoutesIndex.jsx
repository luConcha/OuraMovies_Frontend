import { Routes, Route } from 'react-router-dom';
import { Home, Login, Signup, MovieDetail, Admin } from '@/pages';

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/movie/:id' element={<MovieDetail />} />
      <Route path='/admin' element={<Admin />} />
    </Routes>
  );
};
export default RoutesIndex;
