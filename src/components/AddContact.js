import React from "react";
import { useState } from "react";
const AddContact = (props) => {
  console.log(props);
  //   this.state = {
  //     name: "",
  //     contact: "",
  //   };
  const [contact, setContact] = useState({ name: "", contact: "" });

  const add = (e) => {
    e.preventDefault();
    if (contact.name === "" || contact.contact === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    console.log(e);
    console.log(contact);
    props.addContactHandler(contact);
    setContact({ name: "", contact: "" });
  };

  return (
    <div>
      <h2>AddContact</h2>
      <form className="ui form" onSubmit={add}>
        <div className="ui field">
          <label>Name : </label>
          <input
            className=" field "
            type="text"
            name="name"
            value={contact.name}
            onChange={(e) =>
              setContact((previousState) => {
                return { ...previousState, name: e.target.value };
              })
            }
          />
          <br />
        </div>
        <div className="ui field">
          <label>Contact : </label>
          <input
            className=" field"
            type="text"
            name="contact"
            value={contact.contact}
            onChange={(e) =>
              setContact((previousState) => {
                return { ...previousState, contact: e.target.value };
              })
            }
          />
          <br />
          <br />
          <button className="ui button blue"> Add </button>
          <br />
        </div>
      </form>
    </div>
  );
};

export default AddContact;
