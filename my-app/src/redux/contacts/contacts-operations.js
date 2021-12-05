import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const addContact = createAsyncThunk("contacts/addContact", async (contact) => {
  const { data } = await axios.post("/contacts", contact);
  return data;
});

const removeContact = (id) => {
  return axios.delete(`/contacts/${id}`);
};

const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, { rejectWithValue }) => {
    try {
      await removeContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const fetchContacts = createAsyncThunk("contacts/fetchContacts", async () => {
  const { data } = await axios.get("/contacts");
  console.log(data);
  return data;
});

export { addContact, deleteContact, fetchContacts };
