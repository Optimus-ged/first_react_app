import React from "react";

const Heading = {
  fontSize: "50px",
  color: "blue",
};

const InLine = () => {
  return (
    <>
      <h2 className="error">Error</h2>
      <h2 style={Heading}>Inline Cascading</h2>
    </>
  );
};

export default InLine;
