import '../styles/App.css';
import { useState, useEffect } from 'react';
import SignUpForm from './SignUpForm';
import NavBar from './NavBar'
import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import CharMenu from '../pages/CharMenu';


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
        <Switch>        
          <Route path="/">
            <CharMenu />
          </Route>
        </Switch>       
      </main>
    </>
  );
}

export default App;
