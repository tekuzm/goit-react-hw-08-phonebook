import RegisterForm from 'components/RegisterForm/RegisterForm';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import isUserLogin from 'redux/auth/selectors';

const RegisterPage = () => {
  const isLogin = useSelector(isUserLogin);

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return (
    <div>
      <h1>Registration</h1>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
