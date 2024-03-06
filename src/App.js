import logo from './logo.svg';
import './App.css';

function App() {
  class Car {
    constructor (name) {
      this.brand = name;
    }
  }
  const myCar = new Car("ford")
  const myArray = ["apple","banana","watermelon"]
  const List = myArray.map((item)=> <p> ${item}</p>)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p tabIndex={1}>
          FREE CODE CAMPE 
        </p>
        <p tabIndex={5}>
          FREE CODE CAMPE 
        </p>
        <p tabIndex={3}>
          FREE CODE CAMPE 
        </p>
        <p tabIndex={2}>
          FREE CODE CAMPE 
        </p>
        <List/>
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
