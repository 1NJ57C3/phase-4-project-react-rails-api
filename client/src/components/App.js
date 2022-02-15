import logo from './logo.svg';
import '../styles/App.css';
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(()=> {
    fetch('/hello')
      .then(r => r.json())
      .then(d => setCount(d.count));
  }, []);

  return (
    <div className="App">
      <h1>Page Count: {count}</h1>
    </div>
  );
}

export default App;
