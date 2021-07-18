import React from "react";

const FunctionClick = () => {
  function clickHandler() {
    console.log("The buton was sucessfully clicked");
  }
  return (
    <>
      <button onClick={clickHandler}>Click</button>
    </>
  );
};

export default FunctionClick;
