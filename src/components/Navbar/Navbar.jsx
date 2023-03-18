import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { isUserLogin } from 'redux/auth/selectors';

import NavbarAuth from './NavbarAuth/NavbarAuth';

const Navbar = () => {
  const isLogin = useSelector(isUserLogin);

  return (
    <>
      <Link to="/">Phonebook</Link>
      {isLogin ? <UserMenu /> : <NavbarAuth />}
    </>
  );
};

export default Navbar;
