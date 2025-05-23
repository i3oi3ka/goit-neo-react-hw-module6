import { useState } from "react";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import ContactListEmpty from "./components/ContactListEmpty/ContactListEmpty";
import SearchResultEmpty from "./components/SearchResultEmpty/SearchResultEmpty";
import SearchBox from "./components/SearchBox/SearchBox";
import defaultContacts from "./contacts.json";

function App() {
  const [filter, setFilter] = useState("");
  const [contacts, setContacts] = useLocalStorage("contacts", defaultContacts);
  const changeFilter = (event) => {
    setFilter(event.target.value);
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addContact = (values, actions) => {
    if (!/\d{3}-\d{2}-\d{2}/.test(values.number)) {
      toast("number must be format '123-45-67'");
      return;
    }
    values.id = nanoid();
    setContacts(
      [...contacts, values].toSorted((a, b) => a.name.localeCompare(b.name))
    );
    toast("Contact saved");
    actions.resetForm();
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
    toast("Contact delete success");
  };

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={addContact} />
      <SearchBox filter={filter} changeFilter={changeFilter} />
      {visibleContacts.length > 0 ? (
        <ContactList contacts={visibleContacts} deleteContact={deleteContact} />
      ) : filter ? (
        <SearchResultEmpty />
      ) : (
        <ContactListEmpty />
      )}
      <ToastContainer />
    </div>
  );
}

export default App;
