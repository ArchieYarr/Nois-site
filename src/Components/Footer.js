import React from "react";
import Instagram from "./ComponentImgs/instagram.png"
function Footer(){

    return(

<div className="bg-neutral mx-4">

{/* Slot for social links icons */}


<footer className="border-t-2 border-dashed border-base-200 footer p-10 bg-neutral text-center ">

<div>
    
    <address>
        <p className="underline decoration-solid">
    <a rel = "noopener" target = "_blank" href = "https://www.google.com/maps/place/The+Dockyard+Social/@55.8649712,-4.2965519,17z/data=!3m1!4b1!4m6!3m5!1s0x488845d6e88d7e23:0x690d0e7b3cb4ea5!8m2!3d55.8649683!4d-4.2916864!16s%2Fg%2F11h9rlb7wp?entry=ttu">
    Noi's Bangkok Street Food
    <br/>
    The Dockyard Social
    <br/>
    95-107 Haugh Road
    <br/>
    Glasgow
    <br/>
    G3 8TX
    <br/>
   
    </a>
    </p>

    </address>
</div>
  <nav>
    
    <div className="">
      <a rel="noreferrer" target = "blank" href = "https://www.instagram.com/noicafebangkokstreetfood?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><img className = "btn btn-ghost" src={Instagram}></img></a> <a target="_blank" rel="noreferrer" href="https://icons8.com"></a>
    </div>
  </nav>
</footer>

</div>



    );

}

export default Footer;