import React, { useState, useEffect } from "react";
import Card from "./Card";

const CardShow = ({ cards }) => {
  const [cardList, setCardList] = useState([]);
  const [cardShown, setCardShown] = useState(0);

  useEffect(() => {
    setCardList(cards);
  }, []);

  function renderCard() {
    return <Card cards={cards[cardShown]} numbers={cardShown} />;
  }

  function nextCard() {
    if (cardShown < cardList.length - 1) {
      setCardShown((prevState) => {
        return prevState + 1;
      });
    } else {
      setCardShown(cardList.length - 1);
    }
  }
  function prevCard() {
    if (cardShown > 0) {
      setCardShown((prevState) => {
        return prevState - 1;
      });
    } else {
      setCardShown(0);
    }
  }

  return (
    <div>
      <button onClick={() => prevCard()}>Back</button>
      {renderCard()}
      <button onClick={() => nextCard()}>Next</button>
    </div>
  );
};

export default CardShow;
