import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { useState, useEffect } from "react";

function App() {
  // let mycontacts = [
  //   {
  //     id: 1,
  //     name: "Madhu",
  //     contact: "madhu@gmail.com",
  //   },
  //   {
  //     id: 2,
  //     name: "Megha",
  //     contact: "mega@gmail.com",
  //   },
  // ];

  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    console.log(contact);
    console.log(contacts);
    setContacts([...contacts, contact]);
  };

  // useEffect(() => {
  //   // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   setContacts(contacts);
  // }, contacts);

  return (
    <div className="">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contact={contacts} />
    </div>
  );
}

export default App;
