import React, { Component, useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import "./navBar.css";
import { scroll } from "./scroll";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [click, setClick] = useState(false);
  const color = click ? "#000000" : props.color ? props.color : "#fff";

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
 
    //Function for handeling the redirect scroll

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const{y:pageYOffset}=useWindowScroll();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [Visible, setVibility] = useState(false) 
 
   // eslint-disable-next-line react-hooks/rules-of-hooks
   useEffect(() => {
       if(pageYOffset>400){
           setVibility(true);
       }else{
           setVibility(false);
       }
      
   }, [pageYOffset]);

   const scrollabout=()=>window.scrollTo({top:800,behavior:"smooth"})
   const scrollproject=()=>window.scrollTo({top:3050,behavior:"smooth"})
   const scrollskills=()=>window.scrollTo({top:1700,behavior:"smooth"})

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Having trouble making the buurger style nav bar */}
          <div className="Menu" style={{ color }} onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a onClick={closeMobileMenu}>
              <span className="nav-links" onClick={scrollabout}>About Me</span>
              </a>
            </li>
            <li className="nav-item">
              <a onClick={closeMobileMenu}>
                <span className="nav-links" onClick={scrollskills}>Qualifications</span>
              </a>
            </li>
            <li className="nav-item">
              <a onClick={closeMobileMenu}>
                <span className="nav-links" onClick={scrollproject}> Projects </span>
              </a>
            </li>
          </ul>
          <div
            
            style={{ color: "#fff", paddingLeft: "1rem" }}
          >
            {" "}
            <a href="https://www.linkedin.com/in/alvia-siraj/">
            <h1 className="navbar-logo" >
              Alvia Siraj <i class="far fa-id-card"></i>
            </h1>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
