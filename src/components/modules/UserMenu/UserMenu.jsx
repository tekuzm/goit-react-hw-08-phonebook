import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { logOut } from 'redux/auth/operations';
import { getUser } from 'redux/auth/selectors';

// ========== styles ==========

import { Button } from '@chakra-ui/react';

import css from './UserMenu.module.css';

const UserMenu = () => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const onLogout = async () => {
    if (loading) {
      return;
    }

    setLoading(true);

    try {
      dispatch(logOut());
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={css.userMenuWrap}>
      <p>{user.email}</p>

      <Button
        onClick={onLogout}
        isLoading={loading}
        colorScheme="teal"
        size="md"
      >
        Log out
      </Button>
    </div>
  );
};

export default UserMenu;
