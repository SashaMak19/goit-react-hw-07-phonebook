import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/slices/filterSlice';
import { selectFilter } from 'redux/selectors/selectors';
import styles from './filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector(selectFilter);

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
