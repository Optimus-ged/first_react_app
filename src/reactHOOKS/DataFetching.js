import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetching = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3030/api/article")
      .then((res) => {
        console.log(res.data.response);
        setProducts(res.data.response);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError("Some thing went wrong");
      });
  }, []);

  return (
    <>
      <h2>{loading && "Loading..."}</h2>
      <h2>{error && error}</h2>
      <ul>
        {products.map((prod) => (
          <li key={prod.id}>
            <div>
              <h2>{prod.designation}</h2>
              <p>{prod.pu}</p>
              <p>{prod.a_propos}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default DataFetching;
