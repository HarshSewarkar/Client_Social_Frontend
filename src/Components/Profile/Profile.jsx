import Bar from "../Navbar/Bar";
import Feed from "../Feed/Feed";
import LeftSide from "../LeftSide/LeftSide";
import RightSide from "../RightSide/RightSide";
import "./profile.css";
import { useEffect, useState } from "react";
import axios from "axios";
const PF = import.meta.env.VITE_REACT_APP_PUBLIC_FOLDER;

const Profile = () => {
  const [user, setuser] = useState({});
  const apiUrl = import.meta.env.VITE_REACT_APP_API_URL; //attach the url in .env file seperatly

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${apiUrl}users?username=rahul`);
        setuser(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, []);

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
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">
              {user.desc}
              </span>
            </div>
          </div>
          <hr className="profileHr" />
          <div className="profileRightBottom">
            <Feed username="rahul" />
            <RightSide profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
