import React from "react";
import styled from "@emotion/styled";
import ScrollAnimation from "react-animate-on-scroll";
// eslint-disable-next-line no-unused-vars
import creepyface from "creepyface";
import * as Main10 from "../img/1.png"
// Hover alternative picture
// eslint-disable-next-line no-unused-vars
import * as Main1 from "../img/10.png"
import * as Main2 from "../img/9.png"
import * as Main3 from "../img/8.png"
import * as Main4 from "../img/2.png"
import * as Main5 from "../img/3.png"
import * as Main6 from "../img/4.png"
import * as Main7 from "../img/5.png"
import * as Main8 from "../img/6.png"
import * as Main9 from "../img/7.png"
import Typist from 'react-typist';
import '../App.css'
const Section = styled.div`
height: 100vh;
width: 100%;
display: grid;
justify-items: center;
grid-template-columns: 50% 50%;
align-items: center;
position: relative;
@media all and (max-width: 1070px) {
  height: 100%;
  grid-template-columns: 100%;
}
  
`;
const Text = styled.div`
  //color: white;
  padding: 0 20px;
  width: 500px;
  height: 400px;
  & .hello{
    font-size: 7em;
  }
  & .container{
    font-size: 2em;
  }
  & .containerSmall{
    color: #56afd3;
    font-size: 1.5em;
  }
  @media all and (max-width: 1070px) {
    width: auto;
  height: 250px;
    padding: 100px 10px 50px 10px;
    & .hello{
      font-size: 5em;
    }
    & .container{
      font-size: 2em;
    }
    & .containerSmall{
      color: #56afd3;
      font-size: 1.5em;
    }
    & .arrows{
      display:none;
    }
  }
`;
const Image = styled.div`
position: absolute;
bottom: 0;
right: 10%;
& img{
  width:540px;
}
@media all and (max-width: 1070px) {
  position: static;
  & img{
    width: 350px;
    padding: 50px 0;
  }
}
`
const Main = (color) => {
  return (
    <Section id="section1">
      <Text style={{ color: color.color === '#111111' ? '#fff' : '#111111' }}>
        <ScrollAnimation
          animateIn="fadeIn"
          initiallyVisible={true}
          animateOnce={true}
        >
          <Typist>
            <span className="hello"> Hello! </span>
            <br />
            <span className="container"> My name is Nikita Atroshenko </span>
            <br />
            <br />
            <span className="containerSmall"> I'm Front-End</span>
            <Typist.Backspace count={9} delay={1000} />
            <span className="containerSmall">Back-End</span>
            <Typist.Backspace count={8} delay={1000} />
            <span className="containerSmall">Full-Stack Developer.</span>
          </Typist>
          <svg className="arrows">
            <path className="a1" d="M0 0 L30 32 L60 0"></path>
            <path className="a2" d="M0 20 L30 52 L60 20"></path>
            <path className="a3" d="M0 40 L30 72 L60 40"></path>
          </svg>
        </ScrollAnimation>
      </Text>
      <Image>
        <img
          data-creepyface
          src={Main10} alt='photoOfMe'
          data-src-hover={Main10}
          data-src-look-0={Main2}
          data-src-look-45={Main3}
          data-src-look-90={Main4}
          data-src-look-135={Main5}
          data-src-look-180={Main6}
          data-src-look-225={Main7}
          data-src-look-270={Main8}
          data-src-look-315={Main9}
        />
      </Image>
    </Section>
  );
};

export default Main;
