// ========== components ==========

import ContactEditor from '../ContactEditor/ContactEditor';
import Contacts from '../Contacts/Contacts';

// ========== styles ==========

import css from './PhoneBook.module.css';

const PhoneBook = () => {
  return (
    <div className={css.phonebookWrap}>
      <ContactEditor />
      <Contacts />
    </div>
  );
};

export default PhoneBook;
