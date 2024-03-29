import React from "react";
import { InfoSection } from "../../components";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./data";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default Home;
