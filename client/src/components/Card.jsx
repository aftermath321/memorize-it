import React from "react";
import { useState, useEffect } from "react";

const Card = (props) => {
  const [card, setCard] = useState();

  useEffect(() => {
    setCard(props?.data);
  }, []);

  return (
    <div className="cardWrapper">
      <div className="card">
        <h2>{card?.name}</h2>
        <p>{card?.question}</p>
      </div>
      <div className="answer">
        <h2>{card?.name}</h2>
        <p>{card?.answer}</p>
      </div>
    </div>
  );
};

export default Card;
