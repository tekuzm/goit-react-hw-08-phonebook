import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { addContact, fetchContacts } from 'redux/contacts/operations';

// ========== styles ===========

import { Form, Input, AddBtn } from './ContactForm.styled';

const ContactForm = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({ name: '', phone: '' });
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
          phone,
          onSuccess: () => {
            setState({ name: '', phone: '' });
          },
        })
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }

    // dispatch(addContact({ name, phone }))
    //   .then(({ error }) => {
    //     if (!error) {
    //       setState({ name: '', phone: '' });
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

  const { name, phone } = state;

  return (
    <Form onSubmit={handleSubmit}>
      <label>Name</label>
      <Input
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
        placeholder="Enter name"
      />
      <label>Number</label>
      <Input
        type="tel"
        name="phone"
        value={phone}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
        placeholder="Enter phone number"
      />

      <AddBtn type="submit">{loading ? 'Loading...' : 'Add contact'}</AddBtn>
    </Form>
  );
};

export default ContactForm;
