import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import ScrollAnimation from "react-animate-on-scroll";
import * as Creme from "../img/Screenshot2.png";
import * as EUM from "../img/Screenshot21.png";
import Ticker from "react-ticker";

const Section = styled.div`
  height: 100%;
  width: 100%;
  
  & .slider {
    position: absolute;
    margin-top: 10%;
    transform: rotate(4deg);
    font-size: 9em;
    width: 100%;
    

  }
  & .slider2 {
    transform: rotate(4deg);
    font-size: 9em;
    width: 100%;
    
  }
  @media all and (max-width: 1070px) {
    & .slider2 {
      display:none;
    }
    & .slider {
      display:none;
    }
  }
`;
const Text = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  & .projectImages {
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-gap: 90px;
  }
  & .thumb {
    width: 350px;
    height: 450px;
    margin: 70px auto;
    perspective: 1000px;
  
    & a {
      border-radius: 15%;
      display: block;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      transition: all 1s;
    }
    & a:after {
      
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0%;
      height: 36px;
      background: inherit;
      background-size: cover, cover;
      background-position: bottom;
      transform: rotateX(90deg);
      transform-origin: bottom;
    }
    & a span {
      text-transform: uppercase;
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      font: bold 12px/36px "Open Sans";
      text-align: center;
      transform: rotateX(-89.99deg);
      transform-origin: top;
      z-index: 1;
    }
    & a:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: all 0.5s;
      opacity: 0.15;
      transform: rotateX(95deg) translateZ(-80px) scale(0.75);
      transform-origin: bottom;
    }
  }
  & .thumb:hover {
    & a {
      transform: rotateX(80deg);
      transform-origin: bottom;
      & :before {
        opacity: 1;
        transform: rotateX(0) translateZ(-60px) scale(0.85);
      }
    }
  }

  @media all and (max-width: 1070px) {
    font-size: 20px;
    & .projectImages {
      display: grid;
      grid-template-columns: repeat(1, auto);
      grid-gap: 20px;
    }
    & .thumb {
      width: 270px;
      height: 380px;
      margin: 70px auto;
      perspective: 1000px;
  }
`;

const Slider = (letItBeClass) => {

  const changeFont = () => {
    const fonts = [
      "'Anton', sans-serif ",
      "'Noto Sans', sans-serif"
    ]
    return fonts[Math.floor(Math.random() * fonts.length)]

  }
  return (
    <>
      <div className={letItBeClass.val} style={{ fontFamily: changeFont() }}>
        <Ticker>
          {() => (
            <>
              <p>My Projects&nbsp;</p>
            </>
          )}
        </Ticker>
      </div>
    </>
  )
}
const Projects = (color) => {
  const switchColor = color.color === '#111111' ? '#fff' : '#111111'
  return (
    <Section id="section2">
      <div style={{ color: switchColor }}>
        <Slider val='slider' />
        <Slider val='slider2' />
      </div>
      <Text style={{ color: switchColor }}>
        <ScrollAnimation
          animateIn="fadeIn"
          initiallyVisible={false}
          animateOnce={true}
        >
          <h1>Latest Projects:</h1>
        </ScrollAnimation>
        <div className="projectImages">
          <ScrollAnimation
            animateIn="fadeInUp"
            initiallyVisible={false}
            animateOnce={true}
          >
            <div className="thumb">
              <Link to="/Creme" style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
        url("${Creme}")`, backgroundSize: `0, 100% 100%`
              }}>
                <span style={{ color: switchColor }}>Pastry Shop Creme</span>
              </Link>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInUp"
            initiallyVisible={false}
            animateOnce={true}
            duration={2}
          >
            <div className="thumb">
              <Link to="/EUM" style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
        url("${EUM}")`, backgroundSize: `0, 100% 100%`
              }}>
                <span style={{ color: switchColor }}>EuropeanMoving Deposit Page</span>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </Text>
    </Section>
  );
};

export default Projects;
