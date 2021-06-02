import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyArray, setToyArray] = useState([]);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(()=>{
    fetch('http://localhost:3001/toys')
    .then(r => r.json())
    .then(setToyArray)
  }, [])


  function addNewToy(newToyObj){
    setToyArray([...toyArray, newToyObj])
  }

  function handleDelete(deletedToyId){
    const updatedArray = toyArray.filter((toy) => toy.id !==deletedToyId)
    setToyArray(updatedArray)
  }

  function handleToyLike(toyObj){
    const updatedArray = toyArray.map((toy) =>
    toy.id === toyObj.id ? toyObj : toy
  );
  setToyArray(updatedArray)
}

  return (
    <>
      <Header />
      {showForm ? <ToyForm renderNewToy={addNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer updateToyLikes={handleToyLike} deleteToy={handleDelete} toys={toyArray}/>
    </>
  );
}