// components/Header.js

import "../App.css";

const Header = () => {
  const headerStyle = {
    backgroundColor: "purple",
    height: "50px",
  };

  return (
    <div id="header" className="box" style={headerStyle}>
      Header
    </div>
  );
};

export default Header;