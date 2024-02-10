import "../Style/Post.css";

const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTZ8UVEyZVB1UFlDc0l8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="postProfileImg"
            />
            <span className="postUserName">John Walker</span>
            <span className="postDate">5 min ago</span>
          </div>
          <div className="postTopRight">
            <span class="material-symbols-outlined">more_vert</span>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey's Its My First Yext</span>
          <img
            src="https://images.unsplash.com/photo-1682687221248-3116ba6ab483?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="postImg"
          />
        </div>
        <div className="postBottom">
          <div className="PostBottomLeft">
            <img src="../images/Thumb.png" alt="" className="likeIcon" />
            <img src="../images/Heart.png" alt="" className="likeIcon" />
            <span className="postLikeCount">32 People Like It</span>
          </div>
          <div className="PostBottomRight">
            <span className="postCommentText">9 Comments </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
