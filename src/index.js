// Importing dependancies and modules
import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// Building components
const Wrapper = () => {
  return (
    <article className="wrapper">
      <div className="container">
        <UserItem name="Optimus ged" msg="Eh man t'es ou ? je te vois pas" />
        <UserItem name="Salem Nzolani" msg="On se voit en cours !" />
        <UserItem name="John Kuhnada" msg="Hier j'ai vu Ardy" />
        <UserItem name="Adele Bash" msg="Jeune homme apporte moi ma tune" />
        <UserItem name="Sisi Bash" msg="Demain je serai a l'isig" />
      </div>
    </article>
  );
};

// Building user Component
const UserItem = (props) => {
  return (
    <div className="user-component">
      <div className="avatar"></div>
      <div className="content">
        <p className="name">{props.name}</p>
        <p className="msg">{props.msg}</p>
      </div>
      <p className="heure">12:30</p>
    </div>
  );
};

// Exporting modules
ReactDom.render(<Wrapper />, document.getElementById("root"));
