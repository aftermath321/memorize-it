import Link from 'next/link';
import React, {useState} from 'react'
import handlePost from './api/postCards';

const addCards = () => {
    const [name, setName] = useState('')
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')
    const [author, setAuthor] = useState('')
    const [tags, setTags] = useState([])
    const [tag, setTag] = useState('')

    function addTag(e) {
      e.preventDefault();
      setTags((prevState) => {
        return ([...prevState,  tag])}
        )
      setTag('')
    }

    let tempCard = {
          "name": name,
          "question": question, 
          "answer": answer, 
          "author": author, 
          "tags": tags
        }

    async function handleSubmit(e) {
      e.preventDefault();
      if(tags.length >  0){
        handlePost(tempCard)
        setName('')
        setQuestion('')
        setAnswer('')
        setAuthor('')
        setTag('')
        setTags([])
    } else {
        alert('Please enter some tags!')
    }
    } 

  return (
    <div>
      <Link href="/"><button>Homepage</button></Link>
      <form className='addCards' onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Question"
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <input 
          placeholder="Answer" 
          type="text"  
          value={answer} 
          onChange={(e) => setAnswer(e.target.value)}/>
        <input 
          placeholder="Author" 
          type="text" 
          value={author} 
          onChange={(e) => setAuthor(e.target.value)}/>
        <input 
          placeholder="Tag" 
          type="text" 
          value={tag} 
          onChange={(e) => setTag(e.target.value)}/>

        <button onClick={addTag} >Add tag</button>

        <input value="Send!" type="submit" />
      </form>

      <p>List of tags:</p>
      <ul>
        {tags?.map((tag, index) =>{
            return (<li key={index}>{tag}</li>)
        })}
      </ul>
    </div>
  );
}

export default addCards