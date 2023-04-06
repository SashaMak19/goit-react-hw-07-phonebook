import { useDispatch } from 'react-redux';
import { useFilter } from 'hooks/useFilter';
import { filterContacts } from 'redux/slices/filterSlice';
import styles from './filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const inputValue = useFilter();

  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.filterInput}
        type="text"
        value={inputValue}
        onChange={e => dispatch(filterContacts(e.currentTarget.value))}
      ></input>
    </label>
  );
};

export { Filter };
