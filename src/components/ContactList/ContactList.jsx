import { List } from './ContactListStyled';
import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.phonebook.contacts.items);
  const filter = useSelector(state => state.phonebook.filter.keyword);
  const getFiltredContacts = () => {
    return filter
      ? contacts.filter(({ name }) =>
          name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;
  };

  const filtredContacts = getFiltredContacts();

  return (
    <List>
      {contacts.length > 0 &&
        filtredContacts.map(contact => (
          <ContactsItem key={contact.id} contact={contact} />
        ))}
    </List>
  );
};
