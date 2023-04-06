import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from 'redux/operations/operations';
import { selectAllContacts } from 'redux/selectors/selectors';
import styles from './section-contacts.module.css';
import { selectFilteredContacts } from 'redux/selectors/selectors';

const SectionContacts = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={styles.list}>
      {filteredContacts.map(({ name, phone, id }) => (
        <li key={id} className={styles.item}>
          <span className={styles.span}>{name}:</span>
          <span>{phone}</span>
          <button
            type="button"
            onClick={() => dispatch(deleteContact(id))}
            className={styles.button}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export { SectionContacts };
