import Home from "./Components/Home" 
import Navbar from "./Components/Navbar" 

import './App.css';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    
    <div className="App">
      <Navbar />
      <div>
      <Routes>
        <Route path = "/" element = {<Home />}/>

      </Routes>
      </div>
    </div>
  );
}

export default App;
