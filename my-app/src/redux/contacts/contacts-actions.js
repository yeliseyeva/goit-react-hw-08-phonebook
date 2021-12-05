import { createAction } from "@reduxjs/toolkit";

const changeFilter = createAction('contacts/changeFilter');
const addContact = createAction('contacts/addContact');
const deleteContact = createAction('contacts/delete');
const fetchContacts = createAction('contacts/fetchContacts');

export {changeFilter, addContact, deleteContact, fetchContacts}