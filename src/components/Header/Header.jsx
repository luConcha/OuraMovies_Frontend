import { NavLink } from 'react-router-dom';
import { useAuthContext } from '@/hooks/useAuthContext';
import { useMovieContext } from '@/hooks/useMovieContext';

const Header = () => {
  const { isAuth, logout, userPayload } = useAuthContext();
  const { setSearch } = useMovieContext();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container-fluid'>
        <NavLink className='navbar-brand' to='/'>
          OURAMOVIES
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <form className='d-flex justify-content-start' role='search'>
            <input
              className='form-control me-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
              onChange={handleSearch}
            />
          </form>
        </div>
        <ul className='d-flex justify-content-end navbar-nav me-auto mb-2 mb-lg-0'>
          {userPayload?.role === 'ADMIN' ? (
            <li className='nav-item'>
              <NavLink
                className='nav-link active'
                aria-current='page'
                to='/admin'
                style={{ color: 'green' }}
              >
                Movie Catalog
              </NavLink>
            </li>
          ) : null}
          {isAuth ? (
            <li className='nav-item'>
              <NavLink
                className='nav-link active'
                aria-current='page'
                to='/login'
                onClick={logout}
              >
                Logout
              </NavLink>
            </li>
          ) : (
            <>
              <li className='nav-item'>
                <NavLink
                  className='nav-link active'
                  aria-current='page'
                  to='/login'
                >
                  Login
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/signup'>
                  Sign up
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};
export default Header;
