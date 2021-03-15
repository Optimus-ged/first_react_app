// importing dependancies
import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// Building Team Component
const Team = () => {
  return (
    <article className="wrapper">
      <h1>Cr3sc3nd0'Z</h1>
      <section className="team">
        <TeamMember name="Gedeon Yala" role="President Directeur" />
        <TeamMember name="Gedeon Yala" role="President Directeur" />
        <TeamMember name="Gedeon Yala" role="President Directeur" />
      </section>
    </article>
  );
};

// Building Team-member component
const TeamMember = (props) => {
  return (
    <div className="team-member">
      <div className="member-image"></div>
      <h3>{props.name}</h3>
      <p className="role">{props.role}</p>
      <p className="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos facere
        impedit, earum dolore sint dolores corporis architecto consequuntur quos
        officia voluptatum explicabo in, ex placeat distinctio laboriosam dicta
        obcaecati dolor.
      </p>
    </div>
  );
};

// Exporting module
ReactDom.render(<Team />, document.getElementById("root"));
