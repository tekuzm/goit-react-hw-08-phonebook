import PropTypes from 'prop-types';
import { useState } from 'react';

// ========== styles ==========

import { Item, Bullet, DeleteBtn } from './ContactItem.styled';

const ContactItem = ({ id, name, phone, deleteItem }) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    await deleteItem(id);
    setLoading(false);
  };

  return (
    <Item>
      <Bullet></Bullet>
      {name}: {phone}
      <DeleteBtn onClick={handleDelete} type="button" disabled={loading}>
        {loading ? 'Loading...' : 'Delete'}
      </DeleteBtn>
    </Item>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
};
