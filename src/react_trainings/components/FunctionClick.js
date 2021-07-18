import React from "react";

const FunctionClick = () => {
  const clickHandler = () => console.log("Button clicked");
  return (
    <>
      <button onClick={clickHandler}>Click</button>
    </>
  );
};

export default FunctionClick;
