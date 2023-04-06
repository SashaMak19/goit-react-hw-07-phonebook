import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from 'redux/operations/operations';
import { selectAllContacts, selectFilter } from 'redux/selectors/selectors';
import styles from './section-contacts.module.css';

const SectionContacts = () => {
  const contacts = useSelector(selectAllContacts);
  console.log(contacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilteredContacts = () => {
    const filterToLowerCase = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterToLowerCase)
    );
  };

  const filteredContacts = getFilteredContacts();

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
