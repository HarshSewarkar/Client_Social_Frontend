import Bar from "../src/Components/Bar";
import Feed from "./Feed";
import LeftSide from "../src/Components/LeftSide";
import RightSide from "../src/Components/RightSide";
import "./Style/profile.css";
const PF = import.meta.env.VITE_REACT_APP_PUBLIC_FOLDER;


const Profile = () => {
  return (
    <>
      <Bar />
      <div className="profile">
        <LeftSide />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={`${PF}cover/252_Fashion_sale_facebook_cover_page_template.jpg`}
                alt=""
                className="profileCoverImg"
              />
              <img src={`${PF}post1.jpg`} alt="" className="profileImg" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">jommy</h4>
              <span className="profileInfoDesc">
                hello i am harsh what about you!
              </span>
            </div>
          </div>
          <hr className="profileHr" />
          <div className="profileRightBottom">
            <Feed />
            <RightSide profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
