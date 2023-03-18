import UserMenu from 'components/modules/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { isUserLoggedIn } from 'redux/auth/selectors';

import NavbarAuth from '../AuthNav/AuthNav';

const Navbar = () => {
  const isLoggedIn = useSelector(isUserLoggedIn);

  return (
    <header>
      <NavLink to="/">Phonebook</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
      {isLoggedIn ? <UserMenu /> : <NavbarAuth />}
    </header>
  );
};

export default Navbar;
