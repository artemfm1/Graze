import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import useEffect, useState from "react";
function Form() {
    const [username, setUsername] = useEffect("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            username,
            password,
        }
        await axios.post("https://someapithatisnotairtable.com/", newUser);
        props.setToggleFetch((curr) => !curr);
    }
    render (
        <form>
            <label htmlFor="username">Username:</label>
            <input type="text" value={username} onClick={(e) => setUsername(e.target.value)} />
            <label htmlFor="password">Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onSubmit={handleSubmit}>Submit!</button>
        </form>
    )
}
export default useEffect;
