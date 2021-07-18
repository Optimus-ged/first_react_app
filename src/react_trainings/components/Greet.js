import React from "react";

const Greet = ({ name }) => {
  console.log(props);

  // Second way to use distructuring props
  // const { name } = props;
  return (
    <div>
      <h1>Hello {name}</h1>
      {props.children}
    </div>
  );
};

export default Greet;
