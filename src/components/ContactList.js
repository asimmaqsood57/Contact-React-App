import React from "react";
import ContactCard from "./ContactCard";

import { Link } from "react-router-dom";
export default function ContactList(props) {
  //   console.log(props);

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });
  return (
    <div className="ui celled list " style={{ marginTop: "50px" }}>
      <h3 style={{ margin: "23px" }}>
        Contact List
        <Link to="/add">
          <button style={{ float: "right" }} className="ui button blue right">
            ADD CONTACT
          </button>
        </Link>
      </h3>
      {renderContactList}
    </div>
  );
}
