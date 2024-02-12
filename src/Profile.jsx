import "./Style/profile.css";
import Bar from "../src/Components/Bar";
import Feed from "./Feed";
import LeftSide from "../src/Components/LeftSide";
import RightSide from "../src/Components/RightSide";

const Profile = () => {
  return (
    <>
      <Bar />
      <div className="profile">
        <LeftSide />
        <div className="profileRight">
          <div className="profileRightTop">ASDAAAA</div>
          <div className="profileRightBottom">
            <Feed />
            <RightSide />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
