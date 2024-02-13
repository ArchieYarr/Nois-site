import Home from "./Components/Home" 
import Navbar from "./Components/Navbar" 
import Contact from "./Components/Contact"

import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    
    <div className="App bg-neutral">
      <Navbar />
      <div>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path="/Components/Contact" element={<Contact />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
