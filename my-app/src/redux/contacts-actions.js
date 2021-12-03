// import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";

const changeFilter = createAction('contacts/changeFilter');
const addContact = createAction('contacts/addContact');
const deleteContact = createAction('contacts/delete');
const fetchContacts = createAction('contacts/fetchContacts');

export {changeFilter, addContact, deleteContact, fetchContacts}


// const addContact = createAction("contacts/add", (name, number) => ({
//   payload: {
//     id: shortid.generate(),
//     name,
//     number,
//   },
// }));

// const deleteContact = createAction("contacts/delete");

// const changeFilter = createAction("contacts/changeFilter");

// // eslint-disable-next-line
// export default { addContact, deleteContact, changeFilter };
