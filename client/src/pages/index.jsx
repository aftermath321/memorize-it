import Head from "next/head";
import { useState, useEffect, Suspense } from "react";
import Card from "../components/Card";
import CardShow from "../components/CardShow";
import handleDelete from "./api/deleteCard";
import Link from "next/link";
import getHandle from "./api/getCards";
import Header from "../components/Header"

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


  async function deleteCard(id) {
    handleDelete(id);
    setAllCards((prevState) => {
      return prevState.filter((card) => card._id !== id);
    });
  }

  return (
    <>
      <Head>
        <title>Memorize-IT</title>
        <meta name="description" content="Memorize-IT" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <div className="wrapper">
          <button onClick={() => allCardsHandle()}>Show first card</button>

          <Link href="/addCards">
            <button>add</button>
          </Link>
          <Suspense fallback="Loading...">{showCard()}</Suspense>
        </div>
      </main>
    </>
  );
}
