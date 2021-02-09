import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const Team = () => {
  return (
    <section className="wrapper">
      <h1>Our Team</h1>
      <article className="team">
        <TeamMember name="Paul Doe" role="UI Developper" />
        <TeamMember name="Rosy Meg" role="Tester" />
        <TeamMember name="Alex Wood" role="Support Lead" />
      </article>
    </section>
  );
};

const TeamMember = (props) => {
  return (
    <div className="team-member">
      <div className="team-image"></div>
      <h3>{props.name}</h3>
      <p className="role">{props.role}</p>
      <p className="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        blanditiis ad totam praesentium neque ut quibusdam nulla inventore error
        natus, maiores eum explicabo quos ipsum.
      </p>
    </div>
  );
};

ReactDom.render(<Team/>, document.getElementById('root'));