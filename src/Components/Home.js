import React from "react";
import Fritter from "../Components/ComponentImgs/Fritter.PNG" 
import PadThai from "../Components/ComponentImgs/Pad Thai.PNG" 
import Panang from "../Components/ComponentImgs/Panang red curry.PNG" 
import Vegan from "../Components/ComponentImgs/vegan noodle.PNG" 
function Home(){


    return(
        <div className="bg-neutral grid grid-cols-1 justify-items-center h-full">
        <div className="h-96 w-fit carousel carousel-vertical rounded-box my-4">
        <img className = "carousel-item h-full" src = {Fritter}/>
        <img className = "carousel-item h-full" src = {PadThai }/>
        <img className = "carousel-item h-full" src = {Vegan}/>
        <img className = "carousel-item h-full" src = {Panang}/>
        </div>
        <p class="text-3xl text-center text-logo mx-2">Authentic Thai Street Food in the heart of Glasgows West End</p>
        </div>
    );
}

export default Home;