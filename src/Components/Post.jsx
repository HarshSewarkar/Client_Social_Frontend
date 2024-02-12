import { useState } from "react";
import "../Style/Post.css";
import { Users } from "../dummyUser";

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
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=""
              className="postProfileImg"
            />
            <span className="postUserName">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <span className="material-symbols-outlined">more_vert</span>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.description}</span>
          <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="PostBottomLeft">
            <img
              src="../images/Thumb.png"
              alt=""
              onClick={likeHandler}
              className="likeIcon"
            />
            <img
              src="../images/Heart.png"
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
