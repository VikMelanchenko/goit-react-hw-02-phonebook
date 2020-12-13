import { Component } from 'react';

import s from './ContactsForm.module.scss';

class ContactsForms extends Component {
  state = {
    name: '',
    phone: '',
  };

  onHandleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form className={s.form__item}>
        <label>
          Name
          <input
            className={s.input__item}
            type="text"
            name="name"
            value={this.state.name}
            placeholder="enter contact name"
            onChange={this.onHandleChange}
          ></input>
        </label>
        <label>
          Pnone number
          <input
            className={s.input__item}
            type="tel"
            name="phone"
            value={this.state.phone}
            placeholder="enter phone number"
            onChange={this.onHandleChange}
          ></input>
        </label>
        <button className={s.button__submit} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactsForms;
