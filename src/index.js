// Importing dependancies and modules
import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// Building Wrapper component
const Wrapper = () => {
  return (
    <article className="wrapper">
      <div className="dash-board">
        <UserItem name="Optimus Ged" />
        <UserItem name="Optimus Ged" />
        <UserItem name="Optimus Ged" />
        <UserItem name="Optimus Ged" />
        <UserItem name="Optimus Ged" />
        <UserItem name="Optimus Ged" />
      </div>
      <div className="banner">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
          earum accusantium laudantium minus recusandae corporis in itaque, iure
          distinctio rem cum debitis tempore dolores reiciendis voluptas
          inventore laborum accusamus ipsam.
        </p>
      </div>
    </article>
  );
};

// Building user-component
const UserItem = (props)=>{
    return (
        <div className="user-item">
            <div className="user-avatar"></div>
            <div className="user-name">{props.name}</div>
        </div>
    );
};

// Exporting modules
ReactDom.render(<Wrapper />, document.getElementById("root"));
