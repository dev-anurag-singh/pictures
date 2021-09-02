import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';

const Header = props => {
  return (
    <header className='header'>
      <div className='header__logo-box'>
        <Link to='/'>
          <img className='header__logo' src='/img/logo.png' alt='brand-logo' />
        </Link>
      </div>
      <div className='header__search-box'>
        <SearchBar />
      </div>
      <nav className='nav'>
        <ul className='nav__menu'>
          <li className='nav__item'>
            <Link className='nav__link' to='/brands'>
              Brands
            </Link>
          </li>
          <li className='nav__item'>
            <Link className='nav__link' to='/explore'>
              Explore
            </Link>
          </li>
          <li className='nav__item'>
            <Link className='nav__link' to='/blog'>
              Blog
            </Link>
          </li>
          <li className='nav__item'>
            <Link className='nav__link' to='/contact'>
              Contact
            </Link>
          </li>
          <li className='nav__item'>
            <Link className='nav__link' to='/about'>
              About
            </Link>
          </li>
        </ul>
        <div className='nav__btn-box'>
          <Link to='/join' className='nav__btn nav__btn--blue'>
            Login
          </Link>
          <Link to='/join' className='nav__btn nav__btn--green'>
            Join Free
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
