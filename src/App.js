import logo from './logo.svg';
import './App.css';
import List from './list';
function App() {

  const fruits=[{id:1, name: "apple", calories:95},
                {id:1, name: "banana", calories:95},
                {id:1, name: "orenge", calories:95},
                {id:1, name: "watermelon", calories:95},
                {id:1, name: "jsx", calories:95},
                {id:1, name: "next.js", calories:95}];

  const vegetables=[{id:1, name: "apple", calories:95},
                {id:1, name: "banana", calories:95},
                {id:1, name: "orenge", calories:95},
                {id:1, name: "watermelon", calories:95},
                {id:1, name: "jsx", calories:95},
                {id:1, name: "next.js", calories:95}];
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <List items={fruits} category="fruits" />
        <List items={vegetables} category="vegetables" />
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
