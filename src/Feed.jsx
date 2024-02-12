import Post from "../src/Components/Post";
import Share from "../src/Components/Share";
import "./Style/feed.css";
import { Posts } from "./dummyUser";
const Feed = () => {
  
  return (
    <div className="feedCointainer">
      <div className="feedWeapper">
        <Share />
        {Posts.map(p=>(
        <Post key={p.id} post={p}/>
        ))}
        {/* <Post /> */}
      </div>
    </div>
  );
};

export default Feed;
