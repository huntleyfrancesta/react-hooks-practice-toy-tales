import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, displayToys, addUpdatedToToys}) {

  const toyList = toys.map(toy => {
    return <ToyCard key={toy.id} toy={toy} displayToys={displayToys} addUpdatedToToys={addUpdatedToToys} />
  })

  return (
    <div id="toy-collection">{toyList}</div>
  );
}