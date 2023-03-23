import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

// ========== styles ==========

import {
  Input,
  InputLeftElement,
  Button,
  Icon,
  InputGroup,
} from '@chakra-ui/react';
import { HiOutlineMail } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';

import css from './LoginForm.module.css';

// ========== Log in ==========

const LoginForm = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;

    if (loading) {
      return;
    }

    setLoading(true);

    try {
      await dispatch(
        logIn({
          email: form.elements.email.value,
          password: form.elements.password.value,
          // user: {
          //   email: form.elements.email.value,
          //   password: form.elements.password.value,
          // },
          // token: '',
        })
      );
      setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const { email, password } = state;

  return (
    <form className={css.loginForm} onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Icon as={HiOutlineMail} boxSize={6} />}
        />
        <Input
          size="md"
          variant="outline"
          type="email"
          name="email"
          value={email}
          focusBorderColor="teal.500"
          placeholder="Enter your email"
          onChange={handleChange}
          required
        />
      </InputGroup>

      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Icon as={RiLockPasswordLine} boxSize={6} />}
        />
        <Input
          size="md"
          variant="outline"
          type="password"
          name="password"
          focusBorderColor="teal.500"
          placeholder="Enter your password"
          value={password}
          onChange={handleChange}
          required
        />
      </InputGroup>

      <Button isLoading={loading} colorScheme="teal" size="md" type="submit">
        Log in
      </Button>
    </form>
  );
};

export default LoginForm;
