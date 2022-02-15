import React from "react";

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
      <button variant="outline-secondary" onClick={handleLogoutClick}>
        Logout
      </button>
    </>
  );
}

export default NavBar;
