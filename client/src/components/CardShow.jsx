import React, { useState } from "react";
import Card from "./Card";

const CardShow = ({ cards }) => {

  const [cardList, setCardList] = useState([]);
  const [cardShown, setCardShown] = useState(0);



  
  return (
    <div>
      <button>Back</button>
      <Card data={cards[cardShown]} />
      <button onClick={() => nextCard()}>Next</button>
    </div>
  );
};

export default CardShow;
