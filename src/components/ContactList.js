import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);
  // const { id, name, contact } = props.contact;
  const renderList = props.contact?.map((user) => {
    return <ContactCard contact={user} key={user.id} />;
  });

  return <div className="ui celled list">{renderList}</div>;
};

export default ContactList;
