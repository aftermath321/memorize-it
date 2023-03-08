import Head from "next/head";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import CardShow from "../components/CardShow";
import handleDelete from "./api/deleteCard";
import Link from "next/link";
import getHandle from "./api/getCards";

export default function Home() {
  const [allCards, setAllCards] = useState([]);
  const [selected, setSelected] = useState(false);

  async function allCardsHandle() {
    setAllCards(await getHandle());
    setSelected(true);
  }

  const showCard = () => {
    if (selected) {
      return <CardShow cards={allCards} />;
    }
  };

  const randomCard = () => {
    if (allCards != undefined) {
      const number = Math.random() * (allCards?.length - 0) + 1;
      return allCards[number];
    }
  };

  async function deleteCard(id) {
    handleDelete(id);
    setAllCards((prevState) => {
      return prevState.filter((card) => card._id !== id);
    });
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
          <button onClick={() => allCardsHandle()}>Show first card</button>
          <Link href="/random">
            <button>Random</button>
          </Link>
          <Link href="/addCards">
            <button>add</button>
          </Link>
          {showCard()}
          {/* <CardShow cards={allCards} /> */}
        </div>
      </main>
    </>
  );
}
