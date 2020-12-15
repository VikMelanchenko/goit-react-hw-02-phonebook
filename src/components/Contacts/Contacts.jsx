import s from '../ContactsForms/ContactsForm.module.scss';

// добавляем контакт айтем
const Contact = ({ id, name, phone, onRemoveContact }) => {
  return (
    <li className={s.contact__item}>
      {name}: {phone}
      <button className={s.button__submit} onClick={() => onRemoveContact(id)}>
        Delete
      </button>
    </li>
  );
};

// список добавленных контактов и удаление
const Contacts = ({ contacts, onRemoveContact }) => {
  return (
    <ul className={s.contact__list}>
      {contacts.map((contact) => (
        <Contact {...contact} onRemoveContact={onRemoveContact} />
      ))}
    </ul>
  );
};

export default Contacts;
