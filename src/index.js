import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const Team = () => {
  return (
    <section className="wrapper">
      <h1>Our Team</h1>
      <article className="team">
        <TeamMember name="Optimus Ged" role="UI Developper" />
        <TeamMember name="Cr3sc3ndo Op" role="Mob Developper" />
        <TeamMember name="Gedeon Yala" role="UI Developper" />
      </article>
    </section>
  );
};

const TeamMember = (props) => {
  return (
    <div className="team-member">
      <div className="team-image">{/* <img src="" alt=""/> */}</div>
      <h3>{props.name}</h3>
      <p className="role">{props.role}</p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
        inventore at repudiandae suscipit corporis necessitatibus. Aut veritatis
        omnis libero, perspiciatis illum id voluptatum. Esse, animi itaque
        asperiores nisi fugit voluptatum?
      </p>
    </div>
  );
};

ReactDom.render(<Team />, document.getElementById("root"));
