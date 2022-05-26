import React, { useState } from "react";
import "./Navbar.css";
import {Link} from "react-scroll";

function Navbar(){

    const [scroll, setScroll] = useState(false);
    const [toggle, setToggle] = useState(false);

    var resizeTimer;
    window.addEventListener("resize", ()=>{
        if(document.body.clientWidth>780)
            setToggle(false);
            document.body.classList.add("resize-animation-stopper");
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
              document.body.classList.remove("resize-animation-stopper");
            }, 400);
    });

    window.addEventListener("scroll", ()=>{
        if(window.scrollY > 60) 
            setScroll(true);
        else if(window.scrollY <= 60){
            if(toggle === false)
                setScroll(false);
            else if(toggle === true)
                setScroll(true);
        } 
    });

    function navToggle(){
        setToggle(!toggle);
        if(toggle === false)
            setScroll(true);
        else if(window.scrollY <= 60) setScroll(false);
    }

    return(
        <nav className={scroll? "navbar scrolled":"navbar"}>
            <a href="" className="nav-brand">
                Weather App
            </a>
        </nav>
    );
}

export default Navbar;