import { useState } from "react";
import "../Style/Post.css";
import { Users } from "../dummyUser";
const PF = import.meta.env.VITE_REACT_APP_PUBLIC_FOLDER;

const Post = ({ post }) => {
  const [like, setlike] = useState(post.likes);
  const [isLike, setisLike] = useState(false);

  const likeHandler = () => {
    setlike(isLike ? like - 1 : like + 1);
    setisLike(!isLike);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Users.find((u) => u.id === post.userId)?.profilePicture}
              alt="User Profile"
              className="postProfileImg"
            />
            <span className="postUserName">
              {Users.find((u) => u.id === post.userId)?.username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <span className="material-symbols-outlined">more_vert</span>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.description}</span>
          {/* <img src={`${PF}${post.photo}`} alt="Post Image" className="postImg" /> */}
          <img src={PF + post.photo} alt="Post Image" className="postImg" />

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
            <span className="postLikeCount">{like} People Like It</span>
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
