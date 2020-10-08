import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.id}?set=set2&size=180x180`}
        alt=""
      />
      <h1>{props.monster}</h1>
      <p>{props.email}</p>
    </div>
  );
}

export default Card;
