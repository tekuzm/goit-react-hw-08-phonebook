import { useSelector } from 'react-redux';
import { getEmail } from 'redux/auth/selectors';

const UserMenu = () => {
  const email = useSelector(getEmail);

  return (
    <div>
      <p>{email}</p>
      <button>Logout</button>
    </div>
  );
};

export default UserMenu;
