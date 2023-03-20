import css from './ContactFilter.module.css';
import { setFilterValue } from 'redux/filterSlise';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selector';

export const ContactFilter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);
  return (
    <div>
      <label className={css.filter}>
        Find contacts by Name
        <input
          className={css.filterInput}
          type="text"
          value={value}
          onChange={e => {
            dispatch(setFilterValue(e.target.value));
          }}
          placeholder=" "
        />
      </label>
    </div>
  );
};
