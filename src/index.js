// Importing dependancies and modules
import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

// Building components
const Wrapper = ()=>{
  return (
    <article className="wrapper">
      <div className="container">
        <UserItem
          name="Optimus ged"
          msg="je suis deja a Goma, t'es ou toi ?"
          heure="09:30"
        />
        <UserItem
          name="John Yala"
          msg="Slt man, est ce que tout va comme tu veux ?"
          heure="12:30"
        />
        <UserItem
          name="Salem Nzolani"
          msg="Aujourd'hui les cours commence quand ?"
          heure="08:15"
        />
        <UserItem
          name="Adele Bash"
          msg="Slt man, est ce que tout va comme tu veux ?"
          heure="12:30"
        />
        <UserItem
          name="Optimus ged"
          msg="Slt man, est ce que tout va comme tu veux ?"
          heure="12:30"
        />
      </div>
    </article>
  );
};

const UserItem=(props)=>{
  return (
    <div className="user-item">
      <div className="avatar"></div>
      <div className="content">
        <p className="name">{props.name}</p>
        <p className="msg">{props.msg}</p>
      </div>
      <p className="heure">{props.heure}</p>
    </div>
  );
};

// EXporting modules
ReactDom.render(<Wrapper/>, document.getElementById("root"));