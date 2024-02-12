import "../Style/nav.css";

const Bar = () => {
  return (
    <>
      <div className="navTop ">
        <div className="navLeft">
          <span className="logo">SocialChater</span>
        </div>

        <div className="navCenter">
          {/* this is a google material icon */}
          <span className="material-symbols-outlined">Search</span>
          <input
            className="SearchInputs"
            placeholder="You Can Search Your Friend,Posts,Videos"
          />
        </div>

        <div className="navright">
          <div className="navbarLinks">
            <span className="navbarLinks">Home</span>
            <span className="navbarLinks">Timeline</span>
          </div>
          <div className="navBarIcons">
            <div className="navBarIconItems">
              <span className="kuch material-symbols-outlined">Person</span>
              <span className="navBarIconBadge">1</span>
            </div>
            <div className="navBarIconItems">
              <span className="kuch material-symbols-outlined">Chat</span>
              <span className="navBarIconBadge">2</span>
            </div>
            <div className="navBarIconItems">
              <span className="kuch material-symbols-outlined">notifications</span>
              <span className="navBarIconBadge">3</span>
            </div>
          </div>
          <img
            src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="navbarImage"
          />
        </div>
      </div>
    </>
  );
};

export default Bar;
