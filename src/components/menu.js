import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import { useWindowScroll } from 'react-use'
import React, { Component, useEffect,useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () =>{
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

  
}

export const MenuItems = [
     <Router>
            <Route path='/skills' component={Skills} />
            <Route path='/projects' component={Projects} />
            <Route path='/about' component={About} />
        </Router>
    ,
    {
        title: "home",
        url: "/skills",
        cName:'nav-links'
        
    },
    {
        title: "Knowledge",
        url: '#',
        cName:'nav-links'
    },
    {
        title: "projects",
        url: '#',
        cName:'nav-links'
    }
    
];



