import { Component } from 'react';

import ContactsForms from './components/ContactsForms/ContactsForm';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactsForms />
      </>
    );
  }
}

export default App;
