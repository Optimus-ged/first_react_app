import React from "react";
import "./MyStyle.css";

const StyleSheet = (props) => {
  let className = props.className ? "primary" : "";
  return (
    <>
      <h1 className={`${className} font-big`}>Optimus is the best</h1>
    </>
  );
};

export default StyleSheet;
