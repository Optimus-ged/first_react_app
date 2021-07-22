import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);
  const clickHandler = () => setCount(count + 1);
  
  return (
    <>
      <button onClick={clickHandler}>Counter {count}</button>
    </>
  );
}

export default HookCounter;
