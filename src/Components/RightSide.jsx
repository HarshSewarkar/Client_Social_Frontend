import "../Style/rightSide.css";
import { Users } from "../dummyUser";
import Online from "./Online";
const RightSide = () => {
  return (
    <div className="RightSideCointainer">
      <div className="rightbarWrapper">
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
      </div>
    </div>
  );
};

export default RightSide;
