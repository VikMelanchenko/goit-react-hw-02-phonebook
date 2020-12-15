import s from '../ContactsForms/ContactsForm.module.scss';

// добавляем контакт айтем
const ContactListItem = ({ id, name, phone, onRemoveContact }) => {
  return (
    <li className={s.contact__item}>
      {name}: {phone}
      <button className={s.button__submit} onClick={() => onRemoveContact(id)}>
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;
