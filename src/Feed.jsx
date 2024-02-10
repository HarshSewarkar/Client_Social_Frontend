import Post from "../src/Components/Post";
import Share from "../src/Components/Share";
import "./Style/feed.css";

const Feed = () => {
  return (
    <div className="feedCointainer">
      <div className="feedWeapper">
        <Share />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Feed;
