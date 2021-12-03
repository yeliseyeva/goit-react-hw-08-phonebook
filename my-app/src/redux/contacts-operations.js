import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://61a520014c822c00170420cb.mockapi.io/api/";

const addContact = createAsyncThunk("contacts/addContact", async (contact) => {
  const { data } = await axios.post("/contacts", contact);
  return data;
});

const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId) => {
    const {
      data: { id },
    } = await axios.delete(`./contacts/${contactId}`);
    return id;
  }
);

const fetchContacts = createAsyncThunk("contacts/fetchContacts", async () => {
  const { data } = await axios.get("/contacts");
  console.log(data);
  return data;
});

export { addContact, deleteContact, fetchContacts };
