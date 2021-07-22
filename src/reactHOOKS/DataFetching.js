import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetching = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3030/api/article")
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        setProducts(res.data.response);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setErrorMsg("Some thing whent wrong");
      });
  }, []);

  return (
    <>
      {loading ? (
        "Loading data ..."
      ) : (
        <ul>
          {products.map((prod) => (
            <li key={prod.id}>
              <div>
                <h3>{prod.designation}</h3>
                <p>{prod.pu}</p>
                <p>{prod.a_propos}</p>
              </div>
            </li>
          ))}
        </ul>
      )}

      <h2>{errorMsg && errorMsg}</h2>
    </>
  );
};

export default DataFetching;
