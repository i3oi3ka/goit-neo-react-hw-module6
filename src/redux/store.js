import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filtersSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const contactsConfig = {
  key: "contacts",
  storage,
};

const persistedContactReducer = persistReducer(contactsConfig, contactsReducer);

export const store = configureStore({
  reducer: { contacts: persistedContactReducer, filters: filterReducer },
});

export const persistor = persistStore(store);
