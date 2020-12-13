import { Component } from 'react';
import shortid from 'shortid';

import s from './ContactsForm.module.scss';

class ContactsForms extends Component {
  state = {
    name: '',
    phone: '',
  };

  nameInputId = shortid.generate();
  phoneInputId = shortid.generate();

  // добавление значения в input
  onHandleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  // сабмит формы
  handleSubmit = (e) => {
    e.preventDefault();

    console.log(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', phone: '' });
  };

  render() {
    return (
      <form className={s.form__item} onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
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
        <label htmlFor={this.phoneInputId}>
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
