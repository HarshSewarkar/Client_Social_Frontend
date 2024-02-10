import React from "react";
import "./Style/Home.css"
import Bar from "../src/Components/Bar";
import Feed from "./Feed";
import LeftSide from "../src/Components/LeftSide";
import RightSide from "../src/Components/RightSide";

const Home = () => {
  return (
    <>
      <Bar />
      <div className="homeCointainer">
        <LeftSide />
        <Feed />
        <RightSide />
      </div>
    </>
  );
};

export default Home;
