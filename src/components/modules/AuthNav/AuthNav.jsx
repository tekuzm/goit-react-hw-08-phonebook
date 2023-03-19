import { NavLink } from 'react-router-dom';

// ========== styles =========

import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={css.authWrap}>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log in</NavLink>
    </div>
  );
};

export default AuthNav;
