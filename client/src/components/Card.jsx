import React from "react";
import CardType from "../../types/Card";

const Card = (props) => {
  return (
    <div className="cardWrapper">
      <div className="card">
        <h2>{props?.data?.name}</h2>
        <p>{props?.data?.question}</p>
      </div>
      <div className="answer">
        <h2>{props?.data?.name}</h2>
        <p>{props?.data?.answer}</p>
      </div>
    </div>
  );
};

export default Card;
