import { Component } from 'react';

import ContactsForms from './components/ContactsForms/ContactsForm';

import Contacts from './components/Contacts/Contacts';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  // сабмит формы
  formSubmitHandler = (data) => {
    console.log(data);
  };

  // добавление нового контакта
  addNewContact = (newContact) =>
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));

  // удаление контакта из списка

  removeContact = (id) =>
    this.setState(({ contacts }) => ({
      contacts: contacts.filter((contact) => contact.id !== id),
    }));

  // добавить метод проверки контакта на уникальность + проверку на существующий контакт
  // ---------------------------------------

  render() {
    const { contacts } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <ContactsForms addContact={this.addNewContact} />
        <h1>Contacts</h1>
        <Contacts contacts={contacts} onRemoveContact={this.removeContact} />
      </>
    );
  }
}

export default App;
