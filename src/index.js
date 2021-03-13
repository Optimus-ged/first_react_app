// Importing dependancies
import React from "react";
import ReactDom from "react-dom";

// Building Team component
const Team = () => {
  return (
    <article className="wrapper">
      <h1>Cr3sc3nd0'Z Team</h1>
      <section className="team">
        <TeamMember name="Salem Nzolani" poste="Comptable" />
        <TeamMember name="Jeannette Sham" poste="Caissiere" />
        <TeamMember name="Queen Kafene" poste="Secretaire" />
      </section>
    </article>
  );
};

// Building Team Member
const TeamMember = (props) => {
  return (
    <div className="team-member">
      <div className="member-picture"></div>
      <h3>{props.name}</h3>
      <p className="poste">{props.poste}</p>
      <p className="content">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
        explicabo nam, tempora numquam ipsa alias iste! Delectus amet
        consequatur dolore provident aliquid placeat aspernatur, illo unde,
        commodi blanditiis minima veritatis.
      </p>
    </div>
  );
};

// Exporting module
ReactDom.render(<Team/>, document.getElementById("root"));
