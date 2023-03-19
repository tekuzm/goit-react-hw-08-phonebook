// ========== components ==========

import LoginForm from 'components/modules/LoginForm/LoginForm';

// ========== styles ==========

import css from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <div className={css.loginFormWrap}>
      <h1 className={css.loginTitle}>Log in</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
