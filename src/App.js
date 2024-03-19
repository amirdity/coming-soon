import './App.css';
import Accordian from './components/accordian';
import LoadMore from './components/load-more/LoadMore';
import RandomColor from './components/random-color';
import Slider from './components/slider';
import Star from './components/star/Star';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';


function App() {
  return (
    <div className="App">
    {/*  <Accordian/>   
       <RandomColor/> 
       <Slider/> 
      <Star/> 
      <LoadMore/>*/}
      <TreeView menus={menus}/>
    </div>
  );
}
 
export default App;
