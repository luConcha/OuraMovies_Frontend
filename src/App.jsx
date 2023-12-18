import { AuthProvider } from '@/context/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import RoutesIndex from '@/routes/RoutesIndex';
import Header from '@/components/Header/Header';
import { MovieProvider } from '@/context/MovieContext';
import { WatchListProvider } from './context/WatchListContext';

const App = () => {
  return (
    <AuthProvider>
      <WatchListProvider>
        <MovieProvider>
          <BrowserRouter>
            <Header />
            <RoutesIndex />
          </BrowserRouter>
        </MovieProvider>
      </WatchListProvider>
    </AuthProvider>
  );
};
export default App;
