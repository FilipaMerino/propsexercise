import React from "react";
import Card from "./Card";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card name="Filipa" img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" tel="+123 456 789" email="b@beyonce.com" />
      <input id="fName" placeholder="Enter your first name"/>

    </div>
  );
}

export default App;
