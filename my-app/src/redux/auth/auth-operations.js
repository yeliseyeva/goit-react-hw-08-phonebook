import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk("auth/register", async (credentials) => {
  try {
    const { data } = await axios.post("/users/signup", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      // TODO: Добавить обработку ошибки error.message
    }
  });

  const logOut = createAsyncThunk('auth/logout', async () => {
    try {
      await axios.post('/users/logout');
      token.unset();
    } catch (error) {
      // TODO: Добавить обработку ошибки error.message
    }
  });

const operations = {
    register,
    logOut,
    logIn,
    // fetchCurrentUser,
  };

  export default operations;