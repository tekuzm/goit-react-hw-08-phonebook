// ========== components ==========

import RegisterForm from 'components/modules/RegisterForm/RegisterForm';

// ========== styles ==========

import css from './RegisterPage.module.css';

const RegisterPage = () => {
  return (
    <div className={css.signupFormWrap}>
      <h1 className={css.signupTitle}>Registration</h1>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
