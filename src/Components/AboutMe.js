import React from "react";
import styled from "@emotion/styled";
import ScrollAnimation from "react-animate-on-scroll";
import Ticker from "react-ticker";
import * as Profile from '../img/profilePicture.jpg'
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
  align-items: center;
 
  font-size: 3em;
  padding: 5% 0 10% 40px;
  & .container {
    display: grid;
    grid-template-columns: repeat(2, auto);
  }
  & .profilePicture{
    width: 450px;
  }
  & .descriptionText {
    font-size: 0.5em;
    max-width: 40vw;
    & a {
      text-decoration: none;
      color: #56afd3;
    }
  }
  @media all and (max-width: 1070px) {
    padding: 5% 0 10% 0;
    font-size: 2em;
    & h1{
      display: flex;
      justify-content: center;
      text-align: center;
    }
    & .descriptionText {
      font-size: 0.6em;
      max-width: 80vw;
      
    }
    & .container {
      grid-template-columns: repeat(1, auto);
      justify-items: center;
      & .profilePicture{
        max-width: 80vw;
      }
    }
  }
`;
const Slider = letItBeClass => {
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
              <p>&nbsp;About Me</p>
            </>
          )}
        </Ticker>
      </div>
    </>
  )
}

const Main = (color) => {
  return (
    <Section id="section3">
      <div style={{ color: color.color === '#111111' ? '#fff' : '#111111' }}>
        <Slider val='slider' />
        <Slider val='slider2' />
      </div>
      <Text style={{ color: color.color === '#111111' ? '#fff' : '#111111' }}>
        <div>
          <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={2}>
            <h1>Hello</h1>
          </ScrollAnimation>
          <div className="container">
            <ScrollAnimation
              animateIn="fadeInLeft"
              animateOnce={true}
              duration={2}
            >
              <p className="descriptionText">
                I am young and enthusiastic developer.
                <br /><br />
                My belongness is Full-Stack development. My current practice at the Back-End is NodeJS. My favourites are: 
                <br />
                Rust, Erlnag and Java.
                <br /><br />
                For the Front-End:
                <br />
                React, Angular, Vue and Svelte.
                <br /><br />
                I am co-founder of the team <a href='https://coders.group' target='_blank' rel="noopener noreferrer">coders.group</a>
                <br />
                There we follow the best practices and provide people with good
                quality websites and applications.
                <br /><br />
                This is the least of what I can do. Therefore, please do not hesitate to contact me via links below. 
              </p>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="fadeInRight"
              animateOnce={true}
              duration={1}
            >
              <div className="profilePicture">
                <img className="profilePicture" alt='profilePicture'
                  src={Profile} />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </Text>
    </Section>
  );
};

export default Main;
