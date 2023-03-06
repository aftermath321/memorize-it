export default async function handleDelete(id)
{
  try {
      let res = await fetch(`http://localhost:3000/cards/${id}`, {
        method: 'DELETE',
      });

      if (res.status === 200) {
        let resJson = res.json();
        return resJson;
      } else {
        throw("Error occured")
      }
    } catch (err) {
      console.log(err);
    }
  };

