import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const styles = {
  link: {
    display: "inline-block",
    textDecoration: "none",
    padding: 12,
    fontWeight: 700,
    color: "#2A363B",
  },
  activeLink: {
    color: "#E84A5F",
  },
};

export default function AuthNav() {
  return (
    <div>
      <NavLink to="/register" style={styles.link}>
        <Button variant="outline-primary">Регистрация</Button>
      </NavLink>
      <NavLink to="/login" style={styles.link}>
        <Button variant="outline-primary">Логин</Button>
      </NavLink>
    </div>
  );
}
