import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("10");

  const getData = async () => {
    try {
      const reponse = await fetch(`https://rickandmortyapi.com/api/character`);
      const responseData = await reponse.json();
      const filteredData = await responseData.results.filter(
        (item) => item.id <= input
      );
      // console.log(filteredData);
      // console.log(responseData.results);
      setData(filteredData);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {}, [input]);
  return (
    <div>
      <input type="number" onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => getData()}>add</button>

      {data.map((item) => (
        <div key={item.id}>
          <h4>{item.name}</h4>
          <h5>{item.status}</h5>
          <p>{item.gender}</p>
          <img src={item.image} alt="" style={{ width: 200 }} />
        </div>
      ))}
    </div>
  );
};

export default App;
