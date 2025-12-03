import { Actions } from '../Actions';
import './header.scss';

export const Header = () => {

  return (
    <div className='header-container'>
  <div className="header">
    <a
      href="https://womapp.uk/"
      target="_blank"
      className='logo-link'
    >
      <img
        src="/Logo.svg"
        alt="Company logo"
        className="logo"
      />
      </a>
      
      <Actions />
  </div>

    </div>
  );
};

{/* <div className="header__container">
<div className="header__logo">
  <Link
    to="/"
    className="header__link"
    onClick={() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsBurgerMenu(false);
    }}
  >
    <img
      src="img/logo/logo.svg"
      alt="Company logo"
      className="logo top-logo"
    />
  </Link>
</div>

<HeaderNavigation />

<div
  className="burger__menu"
  onClick={() => {
    setIsBurgerMenu(prev => !prev);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }}
>
  <img
    src={
      isBurgerMenu ? 'img/icons/Close.svg' : 'img/icons/Menu.svg'
    }
    alt="menu icon"
    className="icon"
  />
</div>
</div> */}