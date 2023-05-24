import PropTypes from 'prop-types';
import { ListOfContact, ContactItem } from './ContactList.styled';

export const ContactsList = ({ contacts }) => {
  console.log(contacts);
  return (
    <ListOfContact>
      {contacts.map(contact => (
        <ContactItem key={contact.id}>
          {contact.name}: {contact.number}
        </ContactItem>
      ))}
    </ListOfContact>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
