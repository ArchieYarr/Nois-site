import React from "react";
import Contact from "./Contact"
import Fritter from "../Components/ComponentImgs/Fritter.PNG" 
import PadThai from "../Components/ComponentImgs/Pad Thai.PNG" 
import Panang from "../Components/ComponentImgs/Panang red curry.PNG" 
import Vegan from "../Components/ComponentImgs/vegan noodle.PNG" 
import Assorted from "../Components/ComponentImgs/mango, basil, fry, green.PNG"
function Home(){


    return(
        <div className="bg-neutral">
        <div className=" grid grid-cols-1 justify-items-center h-full mx-2">
        <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral">
        <img className = "carousel-item  " src = {Fritter}/>
        <img className = "carousel-item " src = {PadThai }/>
        <img className = "carousel-item " src = {Vegan}/>
        <img className = "carousel-item " src = {Panang}/>
        <img className = "carousel-item " src = {Assorted}/>
        </div>
        <p className ="text-2xl text-center text-logo mx-2">Authentic Thai Street Food in the heart of Glasgows West End</p>
        </div>

        <div id = "Contact">
        <Contact />
        </div>
        </div>
    );
}

export default Home;