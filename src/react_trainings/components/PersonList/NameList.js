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

  // First way of adding index to a list when mapping items
  // but this way is not the best because it can bring some issues
  // const personsList = persons.map((person, index) => (
  //   <PersonListItem key={index} personData={person} />
  // ));

  // This is the best way to add a key to a list whwen mapping data
  // it always recommanded to use keys which come with the list it self
  const personsList = persons.map((person) => (
    <PersonListItem key={person.id} personData={person} />
  ));

  return <>{personsList}</>;
};

export default NameList;
