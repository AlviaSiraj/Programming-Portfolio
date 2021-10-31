import React, { useState,useEffect } from "react";
import { useWindowScroll } from 'react-use'
import HeroSlider, { Slide, Nav, OverlayContainer } from "hero-slider";
import "./Hero.css";
import GradientButton from "../components/button";

//images
import hero1 from "../images/neon.jpg";
import hero2 from "../images/Seneca1.jpg";
import hero3 from "../images/programming.jpg";
import Button from "../components/button";

const Wrapper = (props) => {
  return <div className="wrapper-container">{props.children}</div>;
};

const Hero = () => {
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
   const scrollproject=()=>window.scrollTo({top:3000,behavior:"smooth"})
   const scrollskills=()=>window.scrollTo({top:1700,behavior:"smooth"})

  return (
    <HeroSlider
      slidingAnimation="left_to_right"
      orientation="horizontal"
      initialSlide={1}
      onBeforeChange={(previousSlide, nextSlide) =>
        console.log("onBeforeChange", previousSlide, nextSlide)
      }
      onChange={(nextSlide) => console.log("onChange", nextSlide)}
      onAfterChange={(nextSlide) => console.log("onAfterChange", nextSlide)}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.33)",
      }}
      settings={{
        slidingDuration: 250,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 5000,
        height: "90vh",
      }}
    >
      <Slide
        background={{
          backgroundImage: hero1,
          backgroundAttachment: "fixed",
        }}
      >
        <OverlayContainer className="overlays">
          <h2>About Me - Alvia Siraj</h2>
          
          <button className="gradbutton" onClick={scrollabout}>
              <span>GET TO KNOW ME</span>
          </button>
        </OverlayContainer>
      </Slide>

      <Slide
        background={{
          backgroundImage: hero2,
          backgroundAttachment: "fixed",
        }}
      >
        <OverlayContainer className="overlays">
          <h2>Skills</h2>
          <button className="gradbutton" onClick={scrollskills}>
              <span>KNOW MY SKILLS</span>
          </button>
                  </OverlayContainer>
      </Slide>

      <Slide
        background={{
          backgroundImage: hero3,
          backgroundAttachment: "fixed",
        }}
      >
        <OverlayContainer className="overlays">
          <h2>projects</h2>
          <button className="gradbutton" onClick={scrollproject}>
              <span>SEE MY PROJECTS</span>
          </button>        
          </OverlayContainer>
      </Slide>

      <Nav />
    </HeroSlider>
  );
};
export default Hero;
