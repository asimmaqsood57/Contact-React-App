import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

export default function ContactCard(prop) {
  const { id, name, email } = prop.contact;

  console.log(id);
  return (
    <div className="item">
      <img src={user} alt="" className="ui avatar image" />
      <div className="content">
        <Link
          to={{ pathname: "/contact/:id", state: { contact: prop.contact } }}
        >
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        onClick={() => {
          prop.clickHandler(prop.contact.id);
        }}
        style={{ color: "red", marginTop: "5px", float: "right" }}
      ></i>
    </div>
  );
}
