import { GlobalStyle } from 'common/GlobalStyle';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container, Title, SubTitle } from './AppStyled';

export const App = () => {
  const contacts = useSelector(state => state.phonebook.contacts.items);

  const STORAGE_KEY = 'contacts';

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <Container>
      <GlobalStyle />
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      <Filter />
      <ContactList />
    </Container>
  );
};
