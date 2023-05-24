import React, { Component } from 'react';
import { ContactForm } from './contactForm/ContactForm';
import { ContactsList } from './contactList/ContactList';
import { Filter } from './filter/Filter';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  // функція запису отриманих даних до масиву contacts
  formSubmit = data => {
    if (
      this.state.contacts.findIndex(contact => contact.name === data.name) ===
      -1
    ) {
      this.state.contacts.push(data);
    } else {
      alert(`${data.name} is already in contacts.`);
    }
    this.setState({ contacts: this.state.contacts });
  };

  render() {
    const { contacts, filter } = this.state;
    console.log(contacts);
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm receiveData={this.formSubmit} />

        <h2>Contacts:</h2>
        <Filter />
        <ContactsList contacts={contacts} />
      </Container>
    );
  }
}
