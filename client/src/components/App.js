import "../styles/App.css";
import { useState, useEffect } from "react";
import SignUpForm from "./SignUpForm";
import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import CharMenu from "../pages/CharMenu";
import CharCreateForm from "./CharCreateForm";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Routes>
          <Route path="/" element={<CharMenu />} />
          <Route path="/char_create" element={<CharCreateForm />} />
        </Routes>
        {/* <CharMenu />
      <CharCreateForm /> */}
      </main>
    </>
  );
}

export default App;
