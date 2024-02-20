import "./Online.css";
const PF = import.meta.env.VITE_REACT_APP_PUBLIC_FOLDER;

const Online = ({ user }) => {
  return (
    <div>
      <li className="rightBarFriend">
        <div className="rightbarProfileImgCointainer">
          <img
            src={PF + user.profilePicture}
            alt=""
            className="rightbarProfileImg"
          />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUsername">{user.username}</span>
      </li>
    </div>
  );
};

export default Online;
