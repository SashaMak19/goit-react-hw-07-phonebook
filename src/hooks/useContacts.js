import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors/selectors';

export const useContacts = () => useSelector(selectFilteredContacts);
