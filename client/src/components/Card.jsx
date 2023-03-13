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
    <div className="card-wrapper">
      <div className="card-content">

        <div className="question">
          <h4>{card?.name}</h4>
          <h3>{card?.question}</h3>
        </div>

        <div className="answer">
          <h4>{card?.answer}</h4>
        </div>

      </div>
    </div>
  );
};

export default Card;
