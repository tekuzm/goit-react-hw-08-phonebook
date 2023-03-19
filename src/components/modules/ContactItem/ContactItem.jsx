import PropTypes from 'prop-types';
import { useState } from 'react';

// ========== styles ==========

import { Button } from '@chakra-ui/react';

import css from './ContactItem.module.css';

const ContactItem = ({ id, name, phone, deleteItem }) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    await deleteItem(id);
    setLoading(false);
  };

  return (
    <li className={css.contactItem}>
      <span className={css.contactItemBullet}></span>
      {name}: {phone}
      <Button
        isLoading={loading}
        colorScheme="teal"
        size="md"
        onClick={handleDelete}
        type="button"
        disabled={loading}
      >
        Delete
      </Button>
    </li>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
};
