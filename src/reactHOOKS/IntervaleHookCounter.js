import React, { useState, useEffect } from "react";

const IntervaleHookCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const incrementCount = setInterval(() => {
      setCount(count + 1);
    }, 50);
    return () => {
      clearInterval(incrementCount);
    };
  }, [count]);

  return (
    <>
      <h1>{count}</h1>
    </>
  );
};

export default IntervaleHookCounter;
