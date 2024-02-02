import logo from './logo.svg';
import './App.css';

function App() {
  const texto = "Hello World";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {texto}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button type="submit">Get Started</button>
        </a>
      </header>
    </div>
  );
}

export default App;
