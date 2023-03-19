import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

// ========== styles ==========

import {
  Input,
  InputLeftElement,
  Button,
  Icon,
  InputGroup,
} from '@chakra-ui/react';
import { TbUserCircle } from 'react-icons/tb';
import { HiOutlineMail } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';

import css from './RegisterForm.module.css';

// ========== Sign up ==========

const RegisterForm = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({ name: '', email: '', password: '' });
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
        register({
          name: form.elements.name.value,
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
      setState({ name: '', email: '', password: '' });
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

  const { name, email, password } = state;

  return (
    <form className={css.signupForm} onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Icon as={TbUserCircle} boxSize={6} />}
        />
        <Input
          size="md"
          variant="outline"
          type="text"
          name="name"
          value={name}
          focusBorderColor="teal.500"
          placeholder="Enter your name"
          onChange={handleChange}
          required
        />
      </InputGroup>

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
          value={password}
          focusBorderColor="teal.500"
          placeholder="Enter your password"
          onChange={handleChange}
          required
        />
      </InputGroup>

      <Button isLoading={loading} colorScheme="teal" size="md" type="submit">
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
