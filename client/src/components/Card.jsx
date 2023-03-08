import React from "react";
import { useState, useEffect } from "react";

const Card = ({cards, numbers}) => {
  const [card, setCard] = useState();
  const [number, setNumber]  = useState();

  useEffect(() => {
    setCard(cards);
    setNumber(numbers);
  }, [numbers]);

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
