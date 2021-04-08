import React from "react";
import Navbar from "react-bootstrap/Navbar";

function MyNavbar(props) {
  const navTheme = { color: "black" , 'background-color': '#FFFAF0', width:'100%' }
  return (
    <div className="nabbar">
      <Navbar>
        <Navbar.Brand style={navTheme} href="/">
          Home Page
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar>
    </div>
  );
}

export default MyNavbar;
