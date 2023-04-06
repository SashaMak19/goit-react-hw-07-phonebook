import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors/selectors';

export const useFilter = () => useSelector(selectFilter);
