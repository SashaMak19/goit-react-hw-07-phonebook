import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from 'redux/operations/operations';
import { useContacts } from 'hooks/useContacts';
import styles from './section-contacts.module.css';

const SectionContacts = () => {
  const filteredContacts = useContacts();
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
