// Importing depedancies and modules
import React from "react";
import ReactDom from "react-dom";
// Importing all css modules
import "./styles/style_global.css";
import "./styles/style_user_item.css";
import "./styles/style_conversation.css";

// Building components
const Wrapper = () => {
  return (
    <article className="wrapper">
      <div className="container">
        <UserItem
          name="Optimus ged"
          message="Slt big bro ! hier t'es pas venu why ?"
          heure="08:25"
        />
        <UserItem
          name="Salem Nzolani"
          message="Je me demande si demain on a cours !"
          heure="10:22"
        />
        <UserItem
          name="John Kuhanda"
          message="Hier soir on etait ensemble"
          heure="15:14"
        />
        <UserItem
          name="Adele Bash"
          message="J'en ai fini avec ce TAF"
          heure="07:53"
        />
        <UserItem
          name="Sisi Bashwira"
          message="Demain je serai en ville et toi ?"
          heure="11:32"
        />
      </div>
      <div className="container">
        <GestMessage />
        <div className="space-between"></div>
        <MyMessage />
        <div className="space-between"></div>
        <GestMessage />
        <div className="space-between"></div>
        <MyMessage />
        <div className="space-between"></div>
      </div>
    </article>
  );
};

// Building User item
const UserItem =(props)=>{
  return (
    <div className="user-item">
      <div className="avatar"></div>
      <div className="content">
        <p className="name">{props.name}</p>
        <p className="msg">{props.message}</p>
        <p className="heure">{props.heure}</p>
      </div>
    </div>
  );
};

// Building gest Message
const GestMessage = () => {
  return (
    <div className="msg-in">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </div>
  );
};

// Building my message
const MyMessage = () => {
  return (
    <div className="msg-out">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </div>
  );
};

// Exporting modules
ReactDom.render(<Wrapper />, document.getElementById("root"));
