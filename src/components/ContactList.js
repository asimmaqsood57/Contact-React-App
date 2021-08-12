import React from "react";
import ContactCard from "./ContactCard";

export default function ContactList(props) {
  //   console.log(props);
  const renderContactList = props.contacts.map((contact) => {
    return <ContactCard contact={contact} />;
  });
  return (
    <div className="ui celled list " style={{ marginTop: "25px" }}>
      <h3>Contact List</h3>
      {renderContactList}
    </div>
  );
}
