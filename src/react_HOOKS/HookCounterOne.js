import React, { useEffect, useState } from "react";

function HookCounterOne() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount((prevState) => prevState + 1);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <>
      <button onClick={handleClick}>You clicked {count} times</button>
    </>
  );
}

export default HookCounterOne;
