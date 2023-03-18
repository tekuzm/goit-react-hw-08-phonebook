import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts/selectors';

// ========== components ==========

import ContactList from 'components/modules/ContactList/ContactList';
import Filter from 'components/modules/Filter/Filter';

const Contacts = () => {
  const contacts = useSelector(getFilteredContacts);

  return (
    <>
      <Filter />
      {contacts.length ? (
        <ContactList contacts={contacts} />
      ) : (
        <p>No contacts in the list. Please add one!</p>
      )}
    </>
  );
};

export default Contacts;
