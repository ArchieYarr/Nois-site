import React,  { useState, useEffect, useRef } from "react";
import {Link} from "react-router-dom"

import Oldlogo from "../Components/ComponentImgs/Old logo.jpg" 
function useClickOutside(handler){
    let domNode = useRef()
    useEffect(function(){
        let maybehandler = function(event){
            if (!domNode.current.contains(event.target)){
                handler()
            }
        }

        document.addEventListener("mousedown", maybehandler)
        return function(){
            document.removeEventListener("mousedown", maybehandler)

        }
    })

    
    
    return domNode
}

function Navbar(){

    //variable for opening and closing the menu with useState functionality
  let [open, setOpen]= useState(false)
  //hook
  let domNode = useClickOutside(function(){
    setOpen(false)
  })

  return(
<nav ref = {domNode} className={'bg-neutral  sticky top-0  z-50 '}>
{/* Left most title on the navbar, animates when the drop down is opened using useSate and onClick */}
    <div  className = "  lg:flex lg:items-center  justify-between  h-16 left-0  " >
    
        
        <Link  onClick = {()=>setOpen(!open)} className={ open ? "motion-safe:animate-fadeIn lg:flex btn btn-ghost normal-case text-2xl md:text-xl ": "motion-safe:animate-fadeOut lg:flex btn btn-ghost normal-case text-2xl md:text-xl"} to = "/" ><img src = {Oldlogo} className="border-2 border-neutral  size-16 "/></Link>
        

        {/* Burger menu icon that switches to an x icon when clicked */}
        <div onClick = {()=>setOpen(!open)} className=" text-3xl absolute right-0 top-0 cursor-pointer lg:hidden">
        
        <button className={open ? "hidden btn btn-ghost normal-case text-xl":"btn btn-ghost normal-case text-xl" }><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-7 h-7 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button>
        <button className={open ? "btn btn-ghost normal-case text-xl": "hidden btn btn-ghost normal-case text-xl"}><svg xmlns="http://www.w3.org/2000/svg" className="inline-block h-7 w-7 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg></button>
        </div>

        {/* navbar content with the links to other pages or areas on the same page using HasLink for internal page functionality. Will open in mobile form when open is true  */}
        <ul onClick = {()=>setOpen(!open)} className={`bg-neutral  lg:bg-opacity-0 lg:flex lg:items-center lg:pb-0 absolute lg:static lg:z-auto z-[-1] left-0  w-full lg:w-auto lg:pl-0 transition-all duration-500 ease-in ${open ? 'top-12 ':'top-[-490px]'}`}>
           <li> 
            <Link className = " btn btn-ghost active:bg-primary normal-case" to = "/Services" >Services</Link>

           </li>  
           <li> 
            <Link className = " btn btn-ghost active:bg-primary normal-case" to = "/Contact" >Contact</Link>
            
           </li>     
           <li> 
            <Link className = " btn btn-ghost active:bg-primary normal-case" to = "/Gallery" >Gallery</Link>
            
           </li>           
        </ul>

    </div>

</nav>
  );

}

    
    

export default Navbar;