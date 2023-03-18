// ========== components ==========

import ContactForm from '../ContactEditor/ContactEditor';
import Contacts from '../Contacts/Contacts';

// ========== styles ==========

import { PhoneBookStyles } from './PhoneBook.styled';

const PhoneBook = () => {
  return (
    <PhoneBookStyles>
      <ContactForm />
      <Contacts />
    </PhoneBookStyles>
  );
};

export default PhoneBook;
