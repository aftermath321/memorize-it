import Head from 'next/head'
import { useState, useEffect } from 'react';
import Card from '../components/Card';
import handleDelete from './api/deleteCard'
import Link from 'next/link';

export default function Home() {

  const [allCards, setAllCards] = useState([])

  const url = "http://localhost:3000/cards";

  async function getCards(){
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data)
      setAllCards(data);
    } catch (err) {
      throw { message: { err } };
    }
  }

  const showCard = () => {
    if (allCards != undefined) {
      let firstCard = allCards[0];
      return <Card data={firstCard} />
    } else {
      return null;
    }
  }

  const randomCard = () => {
    if (allCards != undefined){
      const number = Math.random() * (allCards?.length - 0) + 1;
      return allCards[number];
    }
  }

  async function deleteCard  (id ){
    handleDelete(id);
    setAllCards((prevState) => {
      return prevState.filter((card) => card._id !== id)
    })
  } 



  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Memorize-IT" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <button onClick={() => getCards()}>Show first card</button>
          <button onClick={() => randomCard()}>Random</button>
          <Link href='/addCards'><button>add</button></Link>
          {showCard()}
          <ul>
            {allCards.map((card) => {
              return (
                <li key={card._id}>
                  {card.name}
                    <button onClick={() =>  deleteCard(card._id)}>
                      Delete
                    </button>
                </li>
              )
            })}
          </ul>
        </div>
      </main>
    </>
  );
}
