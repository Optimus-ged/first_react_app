import React from "react";

const ChildComponent = (props) => {
  return (
    <>
      <button onClick={()=> props.greetParent('Child optimus')}>Click here</button>
    </>
  );
};

export default ChildComponent;
