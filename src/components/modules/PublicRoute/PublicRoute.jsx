import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getAuth } from 'redux/auth/selectors';

const PublicRoute = () => {
  const { isLoggedIn, token } = useSelector(getAuth);

  if (!isLoggedIn && token) {
    return <p>Loading...</p>;
  }

  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }
  return <Outlet />;
};

export default PublicRoute;
