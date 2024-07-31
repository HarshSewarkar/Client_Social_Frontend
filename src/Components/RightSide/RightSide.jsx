import "./rightSide.css";
import Online from "../Online/Online";
import { Users } from "../../dummyUser";
const PF = import.meta.env.VITE_REACT_APP_PUBLIC_FOLDER;

const RightSide = ({ user }) => {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayCointainer">
          <img src="../images/people.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Guddu</b> and <b>3 other Friends</b> also have birthday today
          </span>
        </div>
        <img
          src="https://plus.unsplash.com/premium_photo-1705583863953-b137db43d8d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2Mnx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="RightbarAds"
        />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };
  const profileRightBar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem ">
            <span className="rightbarInfoKey">City: </span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem ">
            <span className="rightbarInfoKey">from: </span>
            <span className="rightbarInfoValue">{user.from} </span>
          </div>
          <div className="rightbarInfoItem ">
            <span className="rightbarInfoKey">Relationship: </span>
            <span className="rightbarInfoValue">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 2
                ? "Married"
                : " - "}{" "}
            </span>
          </div>
        </div>
        <h4 className="rightBarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src={`${PF}user5.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarfollowingName">John Carten</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}user6.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarfollowingName">John Carten</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}user7.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarfollowingName">John Carten</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}user8.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarfollowingName">John Carten</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}user9.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarfollowingName">John Carten</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}user3.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarfollowingName">John Carten</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}user4.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarfollowingName">John Carten</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="RightSideCointainer">
        <div className="rightbarWrapper">
          {user ? profileRightBar() : HomeRightBar()}
        </div>
      </div>
    </>
  );
};

export default RightSide;
