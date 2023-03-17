import PropTypes from 'prop-types';

// ========== components ==========

import ContactItem from 'components/ContactItem/ContactItem';

// ========== styles ==========

import { List } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = async id => {
    await dispatch(deleteContact(id));
  };

  return (
    <List>
      {contacts.map(({ id, name, phone }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          phone={phone}
          deleteItem={handleDeleteContact}
        />
      ))}
    </List>
  );
};

export default ContactList;

ContactList.defaultProps = {
  contacts: [],
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};
