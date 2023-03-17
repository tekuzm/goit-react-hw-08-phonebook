import { Link } from 'react-router-dom';

import NavbarAuth from './NavbarAuth/NavbarAuth';

const Navbar = () => (
  <>
    <Link to="/">Phonebook</Link>
    <NavbarAuth />
  </>
);

export default Navbar;
