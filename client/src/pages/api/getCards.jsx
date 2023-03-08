const url = "http://localhost:3000/cards";

async function getHandle() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    throw { message: { err } };
  }
}

export default getHandle;
