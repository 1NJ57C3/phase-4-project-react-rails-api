import '../styles/App.css';
import { useState, useEffect } from 'react';
import LoginForm from "./LoginForm"
import SignUpForm from './SignUpForm';
import NavBar from './NavBar'



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

  return (
    <div className="App">
      <NavBar />
      <SignUpForm />
      <LoginForm />
    </div>
  );
}

export default App;
