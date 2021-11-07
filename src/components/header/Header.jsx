import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/9840077/pexels-photo-9840077.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=480&w=320"
        alt=""
      />
    </div>
  );
};

export default Header;
