import { Component } from 'react';

import ContactsForms from './components/ContactsForms/ContactsForm';

import Contacts from './components/Contacts/Contacts';

import Filter from './components/Filter/Filter';

class App extends Component {
  state = {
    // массив для проверки
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
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

  // фильтр контактов
  onChangeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };

  //  фильтр контактов
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toString().toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  // добавить метод проверки контакта на уникальность + проверку на существующий контакт
  // ---------------------------------------

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <>
        <h1>Phonebook</h1>
        <ContactsForms addContact={this.addNewContact} />
        <h1>Contacts</h1>
        <Filter value={filter} onChange={this.onChangeFilter} />
        <Contacts
          contacts={visibleContacts}
          onRemoveContact={this.removeContact}
        />
      </>
    );
  }
}

export default App;
