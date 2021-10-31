import React, { useState,useEffect } from "react";
import { useWindowScroll } from 'react-use'
import useSound from "use-sound";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./About.css";
import profilepic from "../images/profilepic.jpeg";
import mouse from "../images/mouse.png";
import tv from "../images/tv.png";
import speaker from "../images/speaker.png";
import audio from "../images/music.mp3";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Scroll from "../components/scroll";

function About() {

  //Function for handling the music
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { stop }] = useSound(audio);

  //check if music is playing
  const handleImageClick = () => {
    if (isPlaying) {
      stop();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

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
   const scrollproject=()=>window.scrollTo({top:3050,behavior:"smooth"})


   if(!Visible){
       return false;
   }
  return (
    <>
      <Scroll />
      <div className="about-section">
        <div className="row display-red">
          <div className="col-md-6 mt-3">
            <div>
              <h1 className="title">ABOUT ME</h1>
              <p className="header">
                Alvia Siraj
                <a
                  href="https://www.linkedin.com/in/alvia-siraj/"
                  className="linkedin-button"
                >
                  <img src={profilepic} className="profilepic" />
                </a>
                <p className="click">click picture for linkedIn</p>
              </p>
              <p className="description">
                <br />
                <br />
                My name is Alvia Siraj, I am a student at Seneca College for
                Software Development.
                <br />
                <br />
                I have developed skills in a variety of programming languages
                such as Java, C, and C++. I am also skilled in web development
                using JavaScript, HTML5 and CSS with development tools such as
                Visual Studio Code and have had experience creating an android
                app with a team using Android Studio.
                <br />
                <br />
                I have experience with SQL databases using a variety of database
                technologies, as well as experience with GitHub.
                <br />
                <br />
                I have a passion for film and video games and have experience
                using 3DS Max software to design 3D models and animations.
                <br /> This website was created using React.Js{" "}
              </p>
            </div>

            
              <button className="skillsbtn" onClick={scrollskills}>
                <span>Know My skills</span>
              </button>
 
              <button className="projectsbtn" onClick={scrollproject}>
                <span>see projects</span>
              </button>

            <Switch>
              <Route exact path="/skills" component={Skills} />
              <Route exact path="/projects" component={Projects} />
            </Switch>
          </div>
          <div className="col-md-6 ">
            <div>
              <figure>
                <img
                  src={speaker}
                  className="speaker1"
                  onClick={handleImageClick}
                />
                <figcaption className="clickimg"> click me</figcaption>
              </figure>
            </div>

            <div>
              <img src={tv} className="tv" />
            </div>
            <div>
              <img src={mouse} className="mouse" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
