// importing dependancies
import React from "react";
import ReactDom from "react-dom";

// Building Team component
const Team = () => {
  return (
    <article>
      <h1>Optimus Team</h1>
      <TeamMember name="Optimus Ged" poste="Directeur general" />
      <TeamMember name="Salem Nzolani" poste="Comptable" />
      <TeamMember name="John Kuhanda" poste="Chef de projet" />
    </article>
  );
};

// Building Team Member
const TeamMember = (props) => {
  return (
    <section>
      <div className="team-image"></div>
      <h3>{props.name}</h3>
      <p>{props.poste}</p>
      <p className="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        dignissimos, dolores eaque similique autem non. Voluptates atque, fugit
        et rerum suscipit eligendi neque adipisci sequi labore consectetur, ex,
        expedita fugiat!
      </p>
    </section>
  );
};

// Rendering object
ReactDom.render(<Team />, document.getElementById("root"));
