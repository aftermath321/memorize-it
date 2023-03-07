import React, { useState, useEffect } from 'react'
import getHandle from './api/getCards';
import Link from 'next/link';
import Card from '../components/Card'

const random = () => {

  const [cardList, setCardList] = useState([]);
  const [cardNumber, setCardNumber] = useState();
  const [randomList, setRandomList] = useState([])
  const [selected, setSelected] = useState (false)
   useEffect(()=>{

    async function getCardList() {
    setCardList (await getHandle())
    };

    getCardList()

   }, [])


  function handleChange (event) {
    setCardNumber(event.target.value)
  }

  function handleSubmit (event) {
    event.preventDefault();
    createRandomList()
  }

  function randomNumber (max){
    let number = Math.floor(Math.random() * max);
    return number;
  }

function shuffle(array) {

  let currentIndex = array.length,  randomIndex;

  while (currentIndex != 0) {

    randomIndex = randomNumber(currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function createRandomList (){
  let tempList = cardList;
  shuffle(tempList)
  tempList.splice(cardNumber, tempList.length)
  setRandomList(tempList)
  setSelected(true);
}

function randomOptionsMenu(){
  if (selected){
    let firstCard = randomList[0];
    return <Card data={firstCard}/>
  } else {
    return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <span>
          {cardNumber}
      </span>
      <input 
          type='range'
          max={cardList.length} 
          min="0" 
          value={cardNumber} 
          onChange={(e)=> handleChange(e)}/>
      <button type='submit'>Go!</button>
      </form>)
  }
}

  return (
    <div>
        <Link href="/"><button>Homepage</button></Link>
        <div>
          {randomOptionsMenu()}
            
            
        </div>
    </div>
  )
}

export default random;