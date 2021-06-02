import React, {useState} from "react";

function ToyCard({toyObj, deleteToy, updateToyLikes}) {

  const {id, name, image, likes} = toyObj

  function handleDelete(){
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(() => {deleteToy(id)})
  }

  function handleLike(){
    const updatedLikes = {
      likes: toyObj.likes +1 
    }
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(updatedLikes)
    })
    .then(res => res.json())
    .then(updateToyLikes)
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={handleLike} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDelete} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}