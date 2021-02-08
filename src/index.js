import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const Team = () => {
  return (
    <article className="wrapper">
      <h1>Our Team</h1>
      <section className="team">
        <TeamMember name="Optimus ged" role="Mob Developper" />
        <TeamMember name="Yala Gedeon" role="Front-end Dev" />
        <TeamMember name="Gedeon Yala" role="Back-end Dev" />
      </section>
    </article>
  );
};

const TeamMember = (props) => {
  return (
    <div className="team-member">
      <div className="team-image">
        
      </div>
      <h3>{props.name}</h3>
      <p className="role">{props.role}</p>
      <p className="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum veniam
        porro blanditiis? Ipsa odio quisquam quos, labore, quae ipsum tenetur,
        eaque eum totam recusandae veritatis?
      </p>
    </div>
  );
};

ReactDom.render(<Team />, document.getElementById("root"));
