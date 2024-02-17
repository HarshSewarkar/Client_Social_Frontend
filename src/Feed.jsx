import Post from "../src/Components/Post";
import Share from "../src/Components/Share";
import "./Style/feed.css";
import { Posts } from "./dummyUser";
const Feed = () => {
  // const [Posts, setPosts] = useState([]);
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const response = await axios.get(
  //       `${apiUrl}/timeline/65cf47725990e01254da5f04`
  //     );
  //     console.log(response);
  //   };
  // }, []);

  return (
    <div className="feedCointainer">
      <div className="feedWeapper">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
