import React from "react";
import { NavLink } from "react-router-dom";

function NavBar () {
    return (
        <>
        <NavLink to="/">
            Home
        </NavLink>
        <NavLink to="/contacts">
            Phonebook
        </NavLink>

        <NavLink to="/register">
            SIGN UP
        </NavLink>
        <NavLink to="/login">
            LOG IN
        </NavLink>

        </>
    )
}

export default NavBar;