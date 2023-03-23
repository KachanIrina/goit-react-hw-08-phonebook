import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from 'redux/selector';
import { deleteContact } from 'redux/operations';
import { ContactsListItem } from 'components/ContactListItem/ContactListItem';

export const ContactsList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const handleDelete = id => dispatch(deleteContact(id));
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactsListItem
          key={id}
          id={id}
          name={name}
          number={number}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};
