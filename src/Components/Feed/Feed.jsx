import { useEffect, useState } from "react";
import Post from "../Post/Post";
import Share from "../Share/Share";
import "./feed.css";
import axios from "axios";
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

const Feed = ({ username }) => {
  const [posts, setposts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = username
          ? await axios.get(`${apiUrl}posts/profile/${username}`)
          : await axios.get(`${apiUrl}posts/timeline/65d1b860cfd4f06eed32667e`);
        // console.log(response.data);
        setposts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [username]);

  return (
    <div className="feedCointainer">
      <div className="feedWeapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
