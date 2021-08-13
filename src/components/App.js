import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { uuid } from "uuidv4";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
function App() {
  const localStorageKey = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);

    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(localStorageKey));

    if (retrieveContacts) {
      setContacts(retrieveContacts);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
  }, [contacts]);

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  return (
    <div className="container ui ">
      <Router>
        <Header />

        <Switch>
          <Route
            path="/add"
            component={() => (
              <AddContact addContactHandler={addContactHandler} />
            )}
          />
          <Route
            path="/"
            exact
            component={() => (
              <ContactList
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            )}
          />
        </Switch>

        {/* <AddContact addContactHandler={addContactHandler} /> */}
        {/* <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
      </Router>
    </div>
  );
}

export default App;
