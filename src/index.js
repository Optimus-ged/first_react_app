// Importing modules and dependancies
import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// Building components
const Wrapper = () => {
  return (
    <article className="wrapper">
      <UserItem
        name="Optimus Tec"
        msg="Slt bro est ce que tout va comme tu veux"
        heure="12:30"
      />
      <UserItem
        name="John Yala"
        msg="J'etais la, mais je t'ai pas vu"
        heure="08:45"
      />
    </article>
  );
};

// Building user component
const UserItem = (props) => {
  return (
    <section className="user-item">
      <div className="avatar"></div>
      <div className="content">
        <p className="name">{props.name}</p>
        <p className="msg">{props.msg}</p>
      </div>
      <p className="heure">{props.heure}</p>
    </section>
  );
};

// Exporting modules
ReactDom.render(<Wrapper />, document.getElementById("root"));
