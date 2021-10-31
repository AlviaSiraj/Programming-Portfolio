import React, { useState,useEffect } from "react";
import { useWindowScroll } from 'react-use'
import "./Skills.css";
import GradientButton from "../components/button";


function Skills() {

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

  return (
    <div className="skills-container">
     
      <h1 className="title">MY SKILLS</h1>
      <h1 className="knowledge-title">Knowledge</h1>

      <div className="skills-Content">
      <button className="about-btn" onClick={scrollabout}>
              <span>About Me</span>
          </button>
          <button className="projects-btn" onClick={scrollproject}>
              <span>see projects</span>
          </button>
        <div className="col-md-6 "></div>
        <div
          className="knowledge"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridGap: 20,
          }}
        >
          <div className="full-stack">
            <h3 className="fullstack-title">
              {" "}
              <i class="fas fa-layer-group"></i> Full Stack Web Developer
            </h3>
            <h3 className="fullstack-desc">
              "Love it, it's the best. I can't live without it!"
            </h3>
          </div>
          <div className="front-end">
            <h3 className="frontend-title">
              <i class="fas fa-laptop-code"></i> Front-End Web Developer
            </h3>
            <h3 className="frontend-desc">
              "Love it, it's the best. I can't live without it!"
            </h3>
          </div>
          <div className="ui-design">
            <h3 className="ui-title">
              <i class="fas fa-desktop"></i> UI/UX Design
            </h3>
            <h3 className="ui-desc">
              "Love it, it's the best. I can't live without it!"
            </h3>
          </div>
          <div className="Android-design">
            <h3 className="android-title">
              <i class="fas fa-mobile-alt"></i> Android Application Developer
            </h3>
            <h3 className="android-desc">
              "Love it, it's the best. I can't live without it!"
            </h3>
          </div>
          <div className="database">
            <h3 className="database-title">
              <i class="fas fa-database"></i> Database Experience
            </h3>
            <h3 className="database-desc">
              "Love it, it's the best. I can't live without it!"
            </h3>
          </div>
        </div>
        <h1 className="skills-title">Skills</h1>
        <div
          className="skills"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gridGap: 20,
          }}
        >
          <div className="html-css">
            <h3 className="skill-title">
               HTML/CSS
               <p> &#9733;&#9733;&#9733;&#9733;&#9733;</p>
            </h3>
          </div>

          <div className="html-css">
            <h3 className="skill-title">
               JavaSript
               <p> &#9733;&#9733;&#9733;&#9733;&#9733;</p>
            </h3>
          </div>

          <div className="html-css">
            <h3 className="skill-title">
               WordPress
               <p> &#9733;&#9733;&#9733;&#9733;&#9733;</p>
            </h3>
          </div>

          <div className="html-css">
            <h3 className="skill-title">
            NodeJS
            <p> &#9733;&#9733;&#9733;&#9733;&#9733;</p>
            </h3>
          </div>

          <div className="html-css">
            <h3 className="skill-title">
            React
            <p> &#9733;&#9733;&#9733;&#9733;&#9733;</p>
            </h3>
          </div>

          <div className="html-css">
            <h3 className="skill-title">
            AngularJS
            <p> &#9733;&#9733;&#9733;&#9733;&#9733;</p>
            </h3>
          </div>

          <div className="html-css">
            <h3 className="skill-title">
            Bootstrap
            <p> &#9733;&#9733;&#9733;&#9733;&#9733;</p>
            </h3>
          </div>

          <div className="html-css">
            <h3 className="skill-title">
            P5JS
            <p> &#9733;&#9733;&#9733;&#9733;&#9733;</p>
            </h3>
          </div>

          <div className="html-css">
            <h3 className="skill-title">
            LoopBack
            <p> &#9733;&#9733;&#9733;&#9733;&#9733;</p>

            </h3>
          </div>
          <div className="html-css">
            <h3 className="skill-title">
            C++
            <p> &#9733;&#9733;&#9733;&#9733;&#9733;</p>
            </h3>
          </div>
          <div className="html-css">
            <h3 className="skill-title">
            C
            <p> &#9733;&#9733;&#9733;&#9733;&#9733;</p>
            </h3>
          </div>
          <div className="html-css">
            <h3 className="skill-title">
            Java
            <p> &#9733;&#9733;&#9733;&#9733;&#9733;</p>
            </h3>
          </div>
          <div className="html-css">
            <h3 className="skill-title">
            SQL
            <p> &#9733;&#9733;&#9733;&#9733;&#9733;</p>
            </h3>
          </div>
          <div className="html-css">
            <h3 className="skill-title">
            Oracle
            <p> &#9733;&#9733;&#9733;&#9733;&#9733;</p>
            </h3>
          </div>
          <div className="html-css">
            <h3 className="skill-title">
            Google Firebase
            <p> &#9733;&#9733;&#9733;&#9733;&#9733;</p>

            </h3>
          </div>
          <div className="html-css">
            <h3 className="skill-title">
            MongoDB
            <p> &#9733;&#9733;&#9733;&#9733;&#9733;</p>

            </h3>
          </div>
          <div className="html-css">
            <h3 className="skill-title">
            UNIX
            <p> &#9733;&#9733;&#9733;&#9733;&#9733;</p>
            </h3>
          </div>
          <div className="html-css">
            <h3 className="skill-title">
            Android Studio
            <p> &#9733;&#9733;&#9733;&#9733;&#9733;</p>

            </h3>
          </div>
          <div className="html-css">
            <h3 className="skill-title">
            MS Visual Studio / Code
            <p> &#9733;&#9733;&#9733;&#9733;&#9733;</p>

            </h3>
          </div>
          <div className="html-css">
            <h3 className="skill-title">
              Git
              <p> &#9733;&#9733;&#9733;&#9733;&#9733;</p>

            </h3>
          </div>
          <div className="html-css">
            <h3 className="skill-title">
              3DS Max
              <p> &#9733;&#9733;&#9733;&#9733;&#9733;</p>

            </h3>
          </div>
          <div className="html-css">
            <h3 className="skill-title">
              AdobeXD
              <p> &#9733;&#9733;&#9733;&#9733;&#9733;</p>

            </h3>
          </div>
          <div className="html-css">
            <h3 className="skill-title">
              Google ML Kit
              <p> &#9733;&#9733;&#9733;&#9733;&#9733;</p>

            </h3>
          </div>
          <div className="html-css">
            <h3 className="skill-title">
             VMware
             <p> &#9733;&#9733;&#9733;&#9733;&#9733;</p>

            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skills;
