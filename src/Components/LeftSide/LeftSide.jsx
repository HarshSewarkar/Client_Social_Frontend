import "./leftSide.css";
import { Users } from "../../dummyUser";
import CloseFriends from "../CloseFriend/CloseFriends";


const LeftSide = () => {
  return (
    <div className="LeftSideCointainer">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sideBarListItems">
            <span className="material-symbols-outlined">rss_feed</span>
            {"Feed "}
          </li>

          <li className="sideBarListItems">
            <span className="material-symbols-outlined">Chat</span>
            {"Chat "}
          </li>
          <li className="sideBarListItems">
            <span className="material-symbols-outlined">play_circle</span>
            {"Video "}
          </li>
          <li className="sideBarListItems">
            <span className="material-symbols-outlined">Group</span>
            {"Group "}
          </li>
          <li className="sideBarListItems">
            <span className="material-symbols-outlined">Bookmark</span>
            {"Bookmark "}
          </li>
          <li className="sideBarListItems">
            <span className="material-symbols-outlined">question_mark</span>
            {"Questions "}
          </li>
          <li className="sideBarListItems">
            <span className="material-symbols-outlined">Work</span>
            {"Jobs "}
          </li>
          <li className="sideBarListItems">
            <span className="material-symbols-outlined">Event</span>
            {"Events "}
          </li>
          <li className="sideBarListItems">
            <span className="material-symbols-outlined">School</span>
            {"Courses "}
          </li>
        </ul>
        <button className="sideBarButton">Show More</button>
        <hr className="SidebarHr" />
        <ul className="sidebarFriendList">
        {Users.map((u) => (
            <CloseFriends key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftSide;
