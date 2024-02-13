import React from "react";
import Footer from "./Footer"
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

      
<Footer />
        </div>
    );
}

export default Home;