import React from "react";
import { Button } from "../styles";

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
      <Button  onClick={handleLogoutClick}>
        Logout
      </Button>
    </>
  );
}

export default NavBar;
