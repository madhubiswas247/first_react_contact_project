import React from "react";
import user from "../images/user.png";

const ContactCard = (props) => {
  console.log(props);
  const { id, name, contact } = props.contact;

  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{contact}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.clickHander(id)}
      ></i>
    </div>
  );
};

export default ContactCard;
