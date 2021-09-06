import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';

const Header = props => {
  useEffect(() => {
    const closeMenu = () => {
      document.querySelector('.nav').classList.remove('nav__show');
    };

    document.addEventListener('click', closeMenu);

    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, []);

  const toogleMenu = e => {
    e.stopPropagation();
    document.querySelector('.nav').classList.toggle('nav__show');
  };

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
      <div onClick={toogleMenu} className='ham-menu'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          className='ham-menu__icon'
          viewBox='0 0 16 16'
        >
          <path
            fillRule='evenodd'
            d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
          />
        </svg>
      </div>
      <nav className='nav'>
        <ul className='nav__menu'>
          <li className='nav__item'>
            <Link className='nav__link' to='/search/film'>
              Film
            </Link>
          </li>
          <li className='nav__item'>
            <Link className='nav__link' to='/search/wallpaper'>
              Wallpaper
            </Link>
          </li>
          <li className='nav__item'>
            <Link className='nav__link' to='/search/oceans'>
              Ocean
            </Link>
          </li>
          <li className='nav__item'>
            <Link className='nav__link' to='/search/nature'>
              Nature
            </Link>
          </li>
          <li className='nav__item'>
            <Link className='nav__link' to='/search/mountains'>
              Mountain
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
