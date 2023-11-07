import { Routes, Route } from 'react-router-dom';
import { Home, Login, Signup, MovieDetail } from '@/pages';

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/movie/:id' element={<MovieDetail />}></Route>
    </Routes>
  );
};
export default RoutesIndex;
