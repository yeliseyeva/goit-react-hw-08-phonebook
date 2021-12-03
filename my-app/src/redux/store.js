import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts-reducer";
import {
  //persistStore,
  //persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
//import storage from "redux-persist/lib/storage";

//const contactsPersistConfig = {
//key: "contacts",
//storage,
//blacklist: ["filter"],
//};

const store = configureStore({
  reducer: { contacts: contactsReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === "development",
});

//const persistor = persistStore(store);

// eslint-disable-next-line
export { store };
