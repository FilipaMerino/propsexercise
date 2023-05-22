import React from "react";
import Card from "./Card";
import contacts from "../contacts"
import Avatar from "./Avatar";




function createCard(contact) {
  return(
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );

}




function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
      <input id="fName" placeholder="Enter your first name"/>


    </div>
  );
}

export default App;
