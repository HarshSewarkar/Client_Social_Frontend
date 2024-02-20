import "./closeFriends.css"
const PF = import.meta.env.VITE_REACT_APP_PUBLIC_FOLDER;

const CloseFriends = ({user}) => {

  return (
    <>
        <li className="sidebarFriend">
            <img
              src={PF+user.profilePicture}
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">{user.username}</span>
          </li>
    </>
  )
}

export default CloseFriends;