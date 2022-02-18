import React from "react";
import { Button } from "../styles";
import { Link } from "react-router-dom";


function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);

      }
    });
  }
  return (
    <>
      <Link to={"/"} >
      <Button onClick={handleLogoutClick}>Logout</Button>
      </Link>

      <Link to={"/"} >
      <Button>Home</Button>
      </Link>
    </>
  );
}

export default NavBar;
