import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getAuth } from 'redux/auth/selectors';

const PrivateRoute = () => {
  const { isLoggedIn, token } = useSelector(getAuth);

  if (!isLoggedIn && token) {
    return <p>Loading...</p>;
  }

  if (!isLoggedIn && !token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
