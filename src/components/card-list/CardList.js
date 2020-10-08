import React from "react";
import "./CardList.css";
import Card from "../card/Card";

function CardList(props) {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Card
          key={monster.id}
          monster={monster.name}
          id={monster.id}
          email={monster.email}
        />
      ))}
    </div>
  );
}

export default CardList;
