import { useEffect, useState } from "react";
import "./Post.css";
import axios from "axios"; // used to get data from api
import { format } from "timeago.js"; //this is used to show how was the post created
import { Link } from "react-router-dom";
const PF = import.meta.env.VITE_REACT_APP_PUBLIC_FOLDER; //used to get images from public folder
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL; //attach the url in .env file seperatly

const Post = ({ post }) => {
  const [like, setlike] = useState(post.likes.length);
  const [isLike, setisLike] = useState(false);
  const [user, setuser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${apiUrl}users?userId=${post.userId}`);
        // console.log("User data:", response.data);
        setuser(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [post.userId]);

  if (loading) {
    return <p>Loading...</p>; // You can replace this with a loading spinner or a more sophisticated loading component
  }

  const likeHandler = () => {
    setlike(isLike ? like - 1 : like + 1);
    setisLike(!isLike);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img
                src={user?.profilePicture || `${PF}/cover/noUser.gif`}
                alt="User Profile"
                className="postProfileImg"
              />
            </Link>
            <span className="postUserName">
              {user.username || "Unknown User"}
            </span>

            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <span className="material-symbols-outlined">more_vert</span>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img src={`${PF}${post.img}`} alt="Post Image" className="postImg" />
          {/* <img src={PF+post.photo} alt="Post Image" className="postImg" /> */}
        </div>
        <div className="postBottom">
          <div className="PostBottomLeft">
            <img
              src={`${PF}Thumb.png`}
              alt=""
              onClick={likeHandler}
              className="likeIcon"
            />
            <img
              src={`${PF}Heart.png`}
              alt=""
              onClick={likeHandler}
              className="likeIcon"
            />
            <span className="postLikeCount">Likes {like}</span>
          </div>
          <div className="PostBottomRight">
            <span className="postCommentText">{post?.comments} Comments </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
