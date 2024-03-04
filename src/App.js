import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Student from './Student';
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Header/>
        <Student name ="Spongebob" age={35} student={true} />
        <Student name ="amir fattahi" age={25} student={false} />
        <Student name ="amir fattahi" age={25} student={false} />
        <Student/>
        <Student name = "ali" age={20} student={false}  />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Footer/>
      </div>
      
    </div>
    
  );
}

export default App;
