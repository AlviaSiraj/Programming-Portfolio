import React, { useState,useEffect } from "react";
import { useWindowScroll } from 'react-use'
import "./Projects.css";

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

   const scrollskills=()=>window.scrollTo({top:1700,behavior:"smooth"})
   const scrollabout=()=>window.scrollTo({top:800,behavior:"smooth"})

  return (
    <div className="projects-container">
      <h1 className="title">MY PROJECTS</h1>
      <div className="skills-Content">
      <button className="aboutbtn" onClick={scrollabout}>
              <span>About Me</span>
          </button>

          <button className="skills-btn" onClick={scrollskills}>
              <span>Know My Skills</span>
          </button>
          
        <div className="col-md-6 "></div>
        <div
          className="projects"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridGap: 20,
          }}
        >
          <div className="pose-est">
            <h3 className="project-title">Pose Estimation Mobile App</h3>
            <h3 className="project-desc">
              <ul>
                <li>
                  <span>
                    Working with Android studio to build the application and use
                    Java programming language
                  </span>
                </li>
                <li>
                  <span>
                    Working with a team to create an app that uses machine
                    learning
                    <br /> and pose estimation from Google ML kit to track
                    user’s fitness poses
                  </span>
                </li>
                <li>
                  <span>Uses Google Firebase to store data from user</span>
                </li>
              </ul>
            </h3>
          </div>

          <div className="car-animation">
            <h3 className="project-title">Car Animation Project</h3>
            <h3 className="project-desc">
              <ul>
                <li>
                  <span>
                    Made an animation of a car on a road during a rainy day
                    using 3ds Max software
                  </span>
                </li>
                <li>
                  <span>Used geometry to create the car and the scenery</span>
                </li>
                <li>
                  <span>
                    Used particle system to create the rainy atmosphere
                  </span>
                </li>
               
                    <li>
                      <span>
                        Added animation using physics and animation tools
                      </span>
                  
                </li>
              </ul>
            </h3>
          </div>

          <div className="concert-webpage">
            <h3 className="project-title">
              Virtual Concert Webpage (Front-End)
            </h3>
            <h3 className="project-desc">
              <ul>
                <li>
                  <span>
                    Used React to create and design responsive front-end
                    webpages{" "}
                  </span>
                </li>
                <li>
                  <span>
                    Created a slider of three images for a hero section of a
                    Landing page{" "}
                  </span>
                </li>
                <li>
                  <span>
                    Designed a section to be responsive to mouse hovers to
                    reveal a background image{" "}
                  </span>
                </li>

                <li>
                  <span>
                    Added a section that allows music to be played upon a mouse
                    click
                  </span>
                </li>

                <li>
                  <span>
                  Used lists to properly display items, pricing, and ratings
                  </span>
                </li>
              </ul>{" "}
            </h3>
          </div>

          <div className="client-server">
            <h3 className="project-title">Client – Server Connection</h3>
            <h3 className="project-desc">
              <ul>
                <li>
                  <span>
                  Used C++ to work with socket API to get multiple client connections on one server
                  </span>
                </li>
                <li>
                  <span>
                  Using client and server buffers to connect multiple clients from the same and different devices
                  </span>
                </li>
              </ul>{" "}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skills;
