import { BrowserRouter } from 'react-router-dom';
import RoutesIndex from './routes/RoutesIndex';
import Header from './components/Header/Header';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <RoutesIndex />
      </BrowserRouter>
    </AuthProvider>
  );
};
export default App;
