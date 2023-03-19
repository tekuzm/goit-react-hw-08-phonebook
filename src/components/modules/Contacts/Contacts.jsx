import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts/selectors';

// ========== components ==========

import ContactList from 'components/modules/ContactList/ContactList';
import Filter from 'components/modules/Filter/Filter';

// ========== styles ==========

import css from './Contacts.module.css';

const Contacts = () => {
  const contacts = useSelector(getFilteredContacts);

  return (
    <div className={css.contactsWrap}>
      <Filter />
      {contacts.length ? (
        <ContactList contacts={contacts} />
      ) : (
        <p>No contacts in the list. Please add one!</p>
      )}
    </div>
  );
};

export default Contacts;
