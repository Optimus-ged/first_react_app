import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchingOneItem() {
  const [product, setProduct] = useState({});
  const [idFromButtonClicked, setIdFromButtonClicked] = useState(1);
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/api/article/${idFromButtonClicked}`)
      .then((resp) => {
        console.log(resp.data);
        setProduct(resp.data.response);
      })
      .catch((err) => console.log(err));
  }, [idFromButtonClicked]);

  const handleInput = (e) => {
    setId(e.target.value);
  };

  const handleClick = (e) => {
    setIdFromButtonClicked(id);
  };

  return (
    <>
      <input type="text" value={id} onChange={handleInput} />
      <button onClick={handleClick}>Fetch an item</button>
      <h1>{product.designation}</h1>
      <ul>
        <li>{product.pu}</li>
        <li>{product.a_propos}</li>
      </ul>
    </>
  );
}

export default FetchingOneItem;
