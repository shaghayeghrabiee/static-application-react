
import './App.css';
import Banner from './component/Banner';
import NavBar from './component/NavBar';
import Cards from './component/Cards';
import HamburgerMenu from './component/hamburgerMenu';
import Search from './component/Search';
import {Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">

    <NavBar/>
    <Banner/>
    <Cards/>
    <Search/>
    </div>
      
  );
}

export default App;
