import "../styles/App.css";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import CharMenu from "../pages/CharMenu";
import CharCreateForm from "../pages/CharCreateForm";
import CharSpec from "../pages/CharSpec";

function App() {
  const [user, setUser] = useState(null);
  const [characterScreen,setCharacterScreen] = useState({})

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

// Ternary function that checks to see if User exists, if not display login component

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Routes>
          <Route path="/" element={<CharMenu setCharacterScreen={setCharacterScreen} characterScreen={characterScreen}/>} />
          <Route path="/char_create" element={<CharCreateForm setCharacterScreen={setCharacterScreen} characterScreen={characterScreen}/>} />
          <Route path="/characters/:id" element={<CharSpec characterScreen={characterScreen} />} />
        </Routes>
      </main>
    </>
  );
}

export default App; 