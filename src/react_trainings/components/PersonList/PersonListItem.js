import React from "react";

const PersonListItem = ({ personData }) => {
  return (
    <>
      <p>{`Moi c'est ${personData.name}, je suis ${personData.skill}, j'ai ${personData.age} ans`}</p>
    </>
  );
};

export default PersonListItem;
