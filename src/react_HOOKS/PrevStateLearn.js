import React, { useState } from "react";

function PrevStateLearn() {
  const [count, setCount] = useState(0);
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevState) => prevState + 1);
    }
  };
  return (
    <>
      <button onClick={incrementFive}>Counting {count}</button>
    </>
  );
}

export default PrevStateLearn;
