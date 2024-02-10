import "../Style/leftSide.css";

const LeftSide = () => {
  return (
    <div className="LeftSideCointainer">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sideBarListItems">
            <span class="material-symbols-outlined">rss_feed</span>
            {"Feed "}
          </li>

          <li className="sideBarListItems">
            <span class="material-symbols-outlined">Chat</span>
            {"Chat "}
          </li>
          <li className="sideBarListItems">
            <span class="material-symbols-outlined">play_circle</span>
            {"Video "}
          </li>
          <li className="sideBarListItems">
            <span class="material-symbols-outlined">Group</span>
            {"Group "}
          </li>
          <li className="sideBarListItems">
            <span class="material-symbols-outlined">Bookmark</span>
            {"Bookmark "}
          </li>
          <li className="sideBarListItems">
            <span class="material-symbols-outlined">question_mark</span>
            {"Questions "}
          </li>
          <li className="sideBarListItems">
            <span class="material-symbols-outlined">Work</span>
            {"Jobs "}
          </li>
          <li className="sideBarListItems">
            <span class="material-symbols-outlined">Event</span>
            {"Events "}
          </li>
          <li className="sideBarListItems">
            <span class="material-symbols-outlined">School</span>
            {"Courses "}
          </li>
        </ul>
        <button className="sideBarButton">Show More</button>
        <hr className="SidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img
              src="https://plus.unsplash.com/premium_photo-1664533227571-cb18551cac82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8UVEyZVB1UFlDc0l8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">John Walker</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="https://plus.unsplash.com/premium_photo-1664533227571-cb18551cac82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8UVEyZVB1UFlDc0l8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">John Walker</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="https://plus.unsplash.com/premium_photo-1664533227571-cb18551cac82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8UVEyZVB1UFlDc0l8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">John Walker</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="https://plus.unsplash.com/premium_photo-1664533227571-cb18551cac82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8UVEyZVB1UFlDc0l8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">John Walker</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftSide;
