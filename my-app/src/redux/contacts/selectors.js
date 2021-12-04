import { createSelector } from "@reduxjs/toolkit";

export const getContacts = (state) => state.contacts.items;

export const getFilter = (state) => state.contacts.filter;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter], (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) => 
      contact.name.toLowerCase().includes(normalizedFilter))
  }
)

//export const getVisibleContacts = (state) => {
  //const contacts = getContacts(state);
  //const filter = getFilter(state);
  //const normalizedFilter = filter.toLowerCase();
  //return contacts.filter((contact) =>
    //contact.name.toLowerCase().includes(normalizedFilter)
  //);
//};
