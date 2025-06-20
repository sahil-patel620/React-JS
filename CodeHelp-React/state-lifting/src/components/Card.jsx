import React from "react";
import "./Card.css"

const Card = (props) => {
  return (
    <div className="card">
        {props.label}
      <input
        type="text"
        value={props.text}
        onChange={(e) => props.setText(e.target.value)}
      />
      <p> My value is: {props.text}</p>
    </div>
  );
};

export default Card;
