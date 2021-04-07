import React from "react";
import Navbar from "react-bootstrap/Navbar";

function MyNavbar(props) {
  return (
    <div className="nabbar">
      <Navbar>
        <Navbar.Brand style={{ color: "white" }} href="/">
          Home Page
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
