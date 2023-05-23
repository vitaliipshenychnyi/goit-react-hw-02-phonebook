import PropTypes from 'prop-types';
import { ListOfContact, ContactItem } from './ContactList.styled';

export const ContactsList = ({ contacts }) => {
  console.log(contacts)
  return (
    <ListOfContact>
      {contacts.map(contact => (
        <ContactItem key={contact.id}>{contact.name}</ContactItem>
      ))}
    </ListOfContact>
  );
};

// ContactsList.propTypes = {
//   title: PropTypes.string.isRequired,
//   children: PropTypes.array.isRequired,
// };
