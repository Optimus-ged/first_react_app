import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3030/api/article")
      .then((res) => {
        setProducts(res.data.response);
        console.log(res.data.response);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <ul>
        {products.map((prod) => (
          <li key={prod.id}>
            <div>
              <h2>{prod.designation}</h2>
              <p>{prod.a_propos}</p>
              <p>{prod.pu}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default DataFetching;
