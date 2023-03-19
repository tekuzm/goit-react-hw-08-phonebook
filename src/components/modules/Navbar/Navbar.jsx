import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { isUserLoggedIn } from 'redux/auth/selectors';

// ========== components ==========

import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';

// ========== styles ==========

import css from './Navbar.module.css';

const Navbar = () => {
  const isLoggedIn = useSelector(isUserLoggedIn);

  return (
    <header className={css.header}>
      <div className={css.headerWrap}>
        <NavLink to="/">Home</NavLink>
        {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
      </div>

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default Navbar;
