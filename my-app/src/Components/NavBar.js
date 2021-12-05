import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return (
    <>
      <NavLink to="/">
        <Button variant="outline-primary">Home</Button>
      </NavLink>
      <NavLink to="/contacts">
        <Button variant="outline-primary">Phonebook</Button>
      </NavLink>
    </>
  );
}

export default NavBar;
