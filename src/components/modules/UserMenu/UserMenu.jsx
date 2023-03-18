import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { getUser } from 'redux/auth/selectors';

const UserMenu = () => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <p>{user.email}</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
