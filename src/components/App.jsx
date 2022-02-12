import { GlobalStyle } from 'common/GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container, Title, SubTitle } from './AppStyled';

export const App = () => {
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
