import React from "react";

const ChildComponent = (props) => {
  return (
    <>
      <button onClick={() => props.greetHandler("child")}>Greet parent</button>
    </>
  );
};

export default ChildComponent;
