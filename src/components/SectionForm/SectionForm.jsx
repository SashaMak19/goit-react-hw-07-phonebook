import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations/operations';
import { selectAllContacts } from 'redux/selectors/selectors';
import styles from './section-form.module.css';

const SectionForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);

  const handleChange = e => {
    const nameInput = e.currentTarget.name;
    const valueInput = e.currentTarget.value;

    switch (nameInput) {
      case 'name':
        setName(valueInput);
        break;
      case 'phone':
        setPhone(valueInput);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isExistingContact = contacts.find(
      ({ name }) =>
        name.toLowerCase() === e.currentTarget.name.value.toLowerCase()
    );
    if (isExistingContact) {
      return alert(`${e.currentTarget.name.value} is already in contacs.`);
    }
    dispatch(addContact({ name, phone }));
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.wrapper}>
        <label className={styles.label}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          ></input>
        </label>
        <label className={styles.label}>
          Number
          <input
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={phone}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </div>
    </form>
  );
};

export { SectionForm };
