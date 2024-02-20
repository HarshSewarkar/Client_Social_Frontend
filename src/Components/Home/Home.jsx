import React from "react";
import "./Home.css"
import Bar from "../Navbar/Bar";
import Feed from "../Feed/Feed";
import LeftSide from "../LeftSide/LeftSide";
import RightSide from "../RightSide/RightSide";

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
