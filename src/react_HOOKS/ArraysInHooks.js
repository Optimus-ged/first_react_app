import React, { useState } from "react";

const ArraysInHooks = () => {
  const [products, setProducts] = useState([]);

  const handleClick = () =>
    setProducts([
      ...products,
      {
        id: products.length + 1,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);

  return (
    <>
      <button onClick={handleClick}>Add items</button>
      {products.map((prod) => (
        <h1 key={prod.id}>{prod.value}</h1>
      ))}
    </>
  );
};

export default ArraysInHooks;
