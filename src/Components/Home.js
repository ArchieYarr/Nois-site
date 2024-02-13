import React from "react";
import Footer from "./Footer"
import Contact from "./Contact"
import Services from "./Services"
import Gallery from "./Gallery"

import Fritter from "../Components/ComponentImgs/Fritter.PNG" 
import PadThai from "../Components/ComponentImgs/Pad Thai.PNG" 
import Panang from "../Components/ComponentImgs/Panang red curry.PNG" 
import Vegan from "../Components/ComponentImgs/vegan noodle.PNG" 
import Assorted from "../Components/ComponentImgs/mango, basil, fry, green.PNG"
function Home(){


    return(
        <div>
        <div className="hero min-h-screen bg-neutral">
        <div className=" hero-content grid grid-cols-1 justify-items-center mx-2">
        <div className=" carousel carousel-center max-w-md p-4 space-x-4 bg-neutral">
        <img className = "carousel-item  " src = {Fritter}/>
        <img className = "carousel-item " src = {PadThai }/>
        <img className = "carousel-item " src = {Vegan}/>
        <img className = "carousel-item " src = {Panang}/>
        <img className = "carousel-item " src = {Assorted}/>
        </div>
        <p className ="text-2xl text-center text-logo mx-2">Authentic Thai Street Food in the heart of Glasgows West End</p>
        </div>

        
        </div>
        
        <div className="card w-96 bg-base-100 shadow-xl image-full overflow-hidden">
  <figure><img src={Fritter} alt="Shoes" className="h-32 "/></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        <div>
        <Gallery />
        </div>
        <div>
        <Contact/>
        </div>
      
    <Footer />
        </div>
    );
}

export default Home;