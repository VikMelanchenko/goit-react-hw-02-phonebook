import { Component } from 'react';

import ContactsForms from './components/ContactsForms/ContactsForm';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  formSubmitHandler = (data) => {
    console.log(data);
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactsForms onSubmit={this.formSubmitHandler} />
      </>
    );
  }
}

export default App;
