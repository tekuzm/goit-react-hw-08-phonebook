import LoginForm from 'components/LoginForm/LoginForm';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isUserLogin } from 'redux/auth/selectors';

const LoginPage = () => {
  const isLogin = useSelector(isUserLogin);

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return (
    <div>
      <h1>Log in</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
