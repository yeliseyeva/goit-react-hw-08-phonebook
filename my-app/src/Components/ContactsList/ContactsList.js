import React from "react";
import { useEffect } from "react";
import s from "../ContactsList/ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
// import contactActions from "../../redux/contacts-actions";
import { getVisibleContacts } from "../../redux/selectors";
import { fetchContacts, deleteContact } from "../../redux/contacts-operations";

function ContactsList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <p className={s.contact}>
            {name}: {number}
          </p>
          <button
            type="button"
            onClick={() => dispatch(deleteContact(id))}
            className={s.deleteBtn}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactsList;
