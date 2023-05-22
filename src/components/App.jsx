import React from "react";
import Card from "./Card";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card name="Tommy" img="https://images.pexels.com/photos/1687831/pexels-photo-1687831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" tel="+123 456 789" email="b@beyonce.com" />
      <Card name="Pipoca" img="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" tel="I have no phone, I'm a dog duuuh" email="dog@gmail.com" />
      <Card name="Cusquinho" img="https://images.pexels.com/photos/2928158/pexels-photo-2928158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" tel="I have no phone, I'm a cat duuuh" email="cat@gmail.com" />
      <input id="fName" placeholder="Enter your first name"/>


    </div>
  );
}

export default App;
