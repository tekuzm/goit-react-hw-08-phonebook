import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { addContact, fetchContacts } from 'redux/contacts/operations';

// ========== styles ===========

import {
  Input,
  InputLeftElement,
  Button,
  Icon,
  InputGroup,
} from '@chakra-ui/react';
import { TbUserCircle } from 'react-icons/tb';
import { AiOutlinePhone } from 'react-icons/ai';

import css from './ContactEditor.module.css';

const ContactEditor = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({ name: '', number: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // Handle form submit
  const handleSubmit = async e => {
    e.preventDefault();

    if (loading) {
      return;
    }

    setLoading(true);

    try {
      await dispatch(
        addContact({
          name,
          number,
          onSuccess: () => {
            setState({ name: '', number: '' });
          },
        })
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }

    // dispatch(addContact({ name, number }))
    //   .then(({ error }) => {
    //     if (!error) {
    //       setState({ name: '', number: '' });
    //     }
    //   })
    //   .catch(error => console.log(error));

    return true;
  };

  // Handle input change
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const { name, number } = state;

  return (
    <form className={css.contactEditForm} onSubmit={handleSubmit}>
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
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          placeholder="Enter name"
        />
      </InputGroup>

      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Icon as={AiOutlinePhone} boxSize={6} />}
        />
        <Input
          size="md"
          variant="outline"
          type="tel"
          name="number"
          value={number}
          focusBorderColor="teal.500"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          placeholder="Enter phone number"
        />
      </InputGroup>

      <Button isLoading={loading} colorScheme="teal" size="md" type="submit">
        Add contact
      </Button>
    </form>
  );
};

export default ContactEditor;
