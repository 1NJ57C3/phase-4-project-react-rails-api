import React from "react";
import { Button, NavBarDiv, Nameh1 } from "../styles";
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
    <NavBarDiv>
      <Nameh1>Duelist</Nameh1>
      
      <Link to={"/"} >
        <Button>Home</Button>
      </Link>

      <Link to={"/"} >
        <Button onClick={handleLogoutClick}>Logout</Button>
      </Link>

    </NavBarDiv>
  );
}

export default NavBar;
