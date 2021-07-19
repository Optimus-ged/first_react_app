import React from "react";
import "./MyStyle.css";

const StyleSheet = (props) => {
  let className = props.className ? "primary" : "";
  return (
    <>
      <h1 className={`${className} font-big`}>StyleSheets</h1>
    </>
  );
};

export default StyleSheet;
