import React from "react";
import PersonListItem from "./PersonListItem";

// This is the first approach of looping data
// const NameList = () => {
//   const persons = ["Optimus", "Cr3sc3nd0", "Yala"];
//   const personsList = persons.map((person) => <h2>{person}</h2>);
//   return <>{personsList}</>;
// };

// The Second approach
const NameList = () => {
  const persons = [
    {
      id: 1,
      name: "Optimus",
      age: 23,
      skill: "Developpeur",
    },
    {
      id: 2,
      name: "John",
      age: 61,
      skill: "Soudeur pro",
    },
    {
      id: 3,
      name: "Adele",
      age: 40,
      skill: "Commercante",
    },
    {
      id: 4,
      name: "Sisi",
      age: 30,
      skill: "Informaticienne",
    },
  ];

  const personsList = persons.map((person) => (
    <PersonListItem personData={person} />
  ));

  return <>{personsList}</>;
};

export default NameList;
