export default async function handlePost(props) {
  try {
    let res = await fetch("http://localhost:3000/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: props.name,
        question: props.question,
        answer: props.answer,
        author: props.author,
        tags: props.tags,
      }),
    });

    if (res.status === 201) {
      let resJson = await res.json();
      return resJson;
    } else {
      throw "Error occured";
    }
  } catch (err) {
    console.log(err);
  }
}
