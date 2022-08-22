import React from "react";
import "./NavBar.css";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import { isModalOpen } from "../../redux/actions/postActions";

function NavBar() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(isModalOpen());
  };
  return (
    <div className="nav-bar-container">
      <h1>My Posts</h1>
      <Button variant="primary" as={NavLink} to="/create" onClick={handleClick}>
        Create Post
      </Button>
    </div>
  );
}

export default NavBar;
