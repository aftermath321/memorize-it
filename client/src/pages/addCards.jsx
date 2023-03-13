import Link from "next/link";
import React, { useState, useRef } from "react";
import handlePost from "./api/postCards";
import Header from "../components/Header";

const addCards = () => {
  const [tags, setTags] = useState([]);

  const nameRef = useRef("");
  const questionRef = useRef("");
  const answerRef = useRef("");
  const authorRef = useRef("");
  const tagRef = useRef("");

  function addTag(e) {
    e.preventDefault();

    setTags((prevState) => {
      return [...prevState, tagRef.current.value];
    });
  }

  let tempCard = {
    name: nameRef.current.value,
    question: questionRef.current.value,
    answer: answerRef.current.value,
    author: authorRef.current.value,
    tags: tags,
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (tags.length > 0) {
      handlePost(tempCard);
      alert("Card added!")
      clear();
    } else {
      alert("Please enter some tags!");
    }
  }

  function clear() {
      nameRef.current.value = '';
      questionRef.current.value = '';
      answerRef.current.value = '';
      authorRef.current.value = '';
      tagRef.current.value = '';
  }

  return (
    <div>
      <Header />

      <Link href="/">
        <button>Homepage</button>
      </Link>
      <form className="addCards" onSubmit={handleSubmit}>
        <input placeholder="Name" type="text" ref={nameRef} />
        <input placeholder="Question" type="text" ref={questionRef} />
        <input placeholder="Answer" type="text" ref={answerRef} />
        <input placeholder="Author" type="text" ref={authorRef} />
        <input placeholder="Tag" type="text" ref={tagRef} />

        <button onClick={addTag}>Add tag</button>

        <input value="Send!" type="submit" />
      </form>

      <p>List of tags:</p>
      <ul>
        {tags.map((tag, index) => {
          return <li key={index}>{tag}</li>;
        })}
      </ul>
    </div>
  );
};

export default addCards;
