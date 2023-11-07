import { BrowserRouter } from 'react-router-dom';
import RoutesIndex from '@/routes/RoutesIndex';
import Header from '@/components/Header/Header';
import { AuthProvider } from '@/context/AuthContext';
import { MovieProvider } from '@/context/MovieContext';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <MovieProvider>
          <Header />
          <RoutesIndex />
        </MovieProvider>
      </BrowserRouter>
    </AuthProvider>
  );
};
export default App;
