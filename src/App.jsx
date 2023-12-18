import { AuthProvider } from '@/context/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import RoutesIndex from '@/routes/RoutesIndex';
import Header from '@/components/Header/Header';
import { MovieProvider } from '@/context/MovieContext';

const App = () => {
  return (
    <AuthProvider>
      <MovieProvider>
        <BrowserRouter>
          <Header />
          <RoutesIndex />
        </BrowserRouter>
      </MovieProvider>
    </AuthProvider>
  );
};
export default App;
