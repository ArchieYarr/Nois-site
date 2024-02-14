import Home from "./Components/Home" 
import Navbar from "./Components/Navbar" 
import Footer from "./Components/Footer"
import Services from "./Components/Services"
import Gallery from "./Components/Gallery"
import Contact from "./Components/Contact"

import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    
    <div className="App bg-neutral">
      <Navbar />
      <div>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path="/Components/Footer" element={<Footer />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
