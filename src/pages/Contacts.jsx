import { ContactsList } from '../components/ContactsList/ContactsList';
import ContactForm from '../components/ContactForm/ContactForm';
import { ContactFilter } from '../components/ContactFilter/ContactFilter';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selector';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { Loader } from '../components/Loader/Loader';

function Contacts() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>

      <ContactForm />

      <h2 style={{ marginBottom: 10 }}> Contacts</h2>

      <ContactFilter />
      {isLoading && !error && <Loader />}
      <ContactsList />
    </div>
  );
}
export default Contacts;
