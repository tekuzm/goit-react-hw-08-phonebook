import { useDispatch, useSelector } from 'react-redux';

import { getFilter } from 'redux/filter/selectors';
import { setFilter } from 'redux/filter/slice';

// ========== components ==========

import SearchBtn from '../SearchBtn/SearchBtn';

// ========== styles ==========

import { Input } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';

import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  // Handle filter input change
  const handleFilter = ({ target }) => dispatch(setFilter(target.value));

  // Return layout
  return (
    <div className={css.filterWrap}>
      <Input
        size="md"
        variant="outline"
        type="text"
        name="filter"
        focusBorderColor="teal.500"
        placeholder="Find contacts by name"
        onChange={handleFilter}
        value={filter}
      />
      <IconButton aria-label="Search database" icon={<SearchBtn />} />
    </div>
  );
};

export default Filter;
