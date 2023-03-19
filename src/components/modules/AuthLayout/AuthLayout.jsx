import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { current } from 'redux/auth/operations';

// ========== styles =========

import css from './AuthLayout.module.css';

const AuthLayout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return <div className={css.layout}>{children}</div>;
};

export default AuthLayout;
