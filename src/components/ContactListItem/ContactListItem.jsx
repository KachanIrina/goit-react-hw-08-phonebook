import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { aditContact } from '../../redux/operations';
import css from './ContactListItem.module.css';

export const ContactsListItem = ({
  id,
  name: nameValue,
  number: numberValue,
  handleDelete,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState(nameValue);
  const [number, setNumber] = useState(numberValue);

  const dispatch = useDispatch();

  const handleChangeMode = () => {
    if (isEdit) {
      setIsEdit(prev => !prev);
      dispatch(aditContact({ id, name, number }));
      return;
    }
    setIsEdit(prev => !prev);
  };

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        return;
      case 'number':
        setNumber(e.target.value);
        return;
      default:
        return;
    }
  };
  return (
    <li className={css.contact}>
      {isEdit ? (
        <input
          className={css.editInput}
          type="text"
          value={name}
          name="name"
          onChange={handleChange}
        />
      ) : (
        <p className={css.name}>{name}:</p>
      )}

      {isEdit ? (
        <input
          className={css.editInput}
          type="text"
          value={number}
          name="number"
          onChange={handleChange}
        />
      ) : (
        <p className={css.number}>{number}</p>
      )}
      <button
        className={css.btn}
        type="button"
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
      <button className={css.btn} onClick={handleChangeMode}>
        {isEdit ? 'Save' : 'Edit'}
      </button>
    </li>
  );
};
