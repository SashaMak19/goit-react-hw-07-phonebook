import { SectionForm } from '../SectionForm/SectionForm';
import { SectionContacts } from '../SectionContacts/SectionContacts';
import { Filter } from '../Filter/Filter';
import styles from './app.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <h2>Phone book</h2>
      <SectionForm />
      <h2>Contacts</h2>
      <div className={styles.contactListContainer}>
        <Filter />
        <SectionContacts />
      </div>
    </div>
  );
};

export { App };
