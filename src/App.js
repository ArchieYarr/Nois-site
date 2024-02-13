import Home from "./Components/Home" 
import Navbar from "./Components/Navbar" 
import Footer from "./Components/Footer"

import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    
    <div className="App bg-neutral">
      <Navbar />
      <div>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path="/Components/Contact" element={<Footer />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
