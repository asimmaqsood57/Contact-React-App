import React from "react";

import user from "../images/user.png";

export default function ContactCard(prop) {
  return (
    <div className="item">
      <img src={user} alt="" className="ui avatar image" />
      <div className="content">
        <div className="header">{prop.contact.name}</div>
        <div>{prop.contact.email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "5px", float: "right" }}
      ></i>
    </div>
  );
}
