import React from "react";
import { Button, NavBarDiv, Nameh1, ButtonNav} from "../styles";
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
        <ButtonNav>Home</ButtonNav>
      </Link>

      <Link to={"/"} >
        <ButtonNav onClick={handleLogoutClick}>Logout</ButtonNav>
      </Link>

    </NavBarDiv>
  );
}

export default NavBar;
