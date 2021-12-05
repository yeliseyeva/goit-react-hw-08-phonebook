import React from "react";
import { useEffect } from "react";
import s from "../ContactsList/ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getVisibleContacts } from "../../redux/contacts/selectors";
import {
  fetchContacts,
  deleteContact,
} from "../../redux/contacts/contacts-operations";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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
          <Button
            variant="outline-dark"
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default ContactsList;
