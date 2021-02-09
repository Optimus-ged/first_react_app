import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const Team = () => {
  return (
    <article className="wrapper">
      <h1>Our team</h1>
      <section className="team">
        <TeamMember name="Optimus ged" role="Mob developper" />
        <TeamMember name="Paul Doe" role="Tester" />
        <TeamMember name="Rosy Meg ged" role="Support Lead" />
      </section>
    </article>
  );
};

const TeamMember = (props) => {
  return (
    <section className="team-member">
      <div className="team-image"></div>
      <h3>{props.name}</h3>
      <p className="role">{props.role}</p>
      <p>
        <div className="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut est nulla
          quibusdam, architecto natus non officia eligendi voluptas? Deleniti
          in, aliquam iste blanditiis distinctio quas totam aspernatur ipsum
          natus obcaecati?
        </div>
      </p>
    </section>
  );
};

ReactDom.render(<Team />, document.getElementById("root"));
