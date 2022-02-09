import { useEffect } from 'react';
import { GlobalStyle } from 'common/GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container, Title, SubTitle } from './AppStyled';
import { useSelector, useDispatch } from 'react-redux';
import * as phonebookActions from '../redux/PhonebookActions';

export const App = () => {
  const contacts = useSelector(state => state.phonebook.contacts.items);
  const filter = useSelector(state => state.phonebook.contacts.filter);
  const dispatch = useDispatch();
  const STORAGE_KEY = 'contacts';

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const onSubmitHandler = contactObj => {
    dispatch(phonebookActions.add(contactObj));
  };

  const onChangeHandler = newFilter => {
    dispatch(phonebookActions.setFilter(newFilter));
  };

  const onDeleteHandler = id => {
    dispatch(phonebookActions.remove(id));
  };

  const getFiltredContacts = () => {
    return filter
      ? contacts.filter(({ name }) =>
          name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;
  };

  return (
    <Container>
      <GlobalStyle />
      <Title>Phonebook</Title>
      <ContactForm onSubmit={onSubmitHandler} contacts={contacts} />
      <SubTitle>Contacts</SubTitle>
      <Filter onChange={onChangeHandler} />
      <ContactList contacts={getFiltredContacts()} onDelete={onDeleteHandler} />
    </Container>
  );
};
