import "./Share.css";
const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src="https://plus.unsplash.com/premium_photo-1666265384829-fe742f10db4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTV8UVEyZVB1UFlDc0l8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="shareProfileImg"
          />
          <input
            placeholder="What's In Your Mind Harsh?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareButtom">
          <div className="shareOptions">
            <div className="shareOption">
              <span className="gillery material-symbols-outlined">
                perm_media
              </span>
              <span className="ShareOptionsText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <span  className="label material-symbols-outlined">
                label
              </span>
              <span className="ShareOptionsText">Tag</span>
            </div>
            <div className="shareOption">
              <span  className="room material-symbols-outlined">
                room
              </span>
              <span className="ShareOptionsText">Location</span>
            </div>
            <div className="shareOption">
              <span className="golden material-symbols-outlined">
                mood
              </span>
              <span className="ShareOptionsText">Feeling</span>
            </div>
            <button className="ShareButton">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
