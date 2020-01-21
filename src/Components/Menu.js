import React, { useState } from "react";
import styled from "@emotion/styled";
import { Link } from "react-scroll";
import * as Logo from "../img/logo192.png"
import * as LogoBlack from '../img/logo_black.png'
const MenuBar = styled.div`
& .logo{
  cursor: pointer;
  position: fixed;
  z-index: 11;
  top: 3em;
  left: 3em;
  & img{
    width: 100px;
    @media all and (max-width: 1070px) {
      width: 50px;
  }
  }
  @media all and (max-width: 1070px) {
    top: 0.35em;
    left: 0.35em;
}
}
& .navbar {
  display: block;
  position: fixed;
  z-index: 101;
  top: 3em;
  right: 3em;
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  & div {
    position: absolute;
    height: 4px;
    width: 30px;
    transition: all 0.5s ease;
  }
  & .first {
    top: 15%;
    left: 10px;
  }
  & .second {
    top: 45%;
    left: 10px;
  }
  & .third {
    top: 75%;
    left: 10px;
  }
  @media all and (max-width: 1070px) {
      top: 0.35em;
      right: 0;
      width: 50px;
      height: 50px;
      border: none;
  }
}
& .menuContent {
  position: fixed;
  display: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  z-index: 100;
  margin: 0;
  padding: 0;
}
& .menuContentlist{
  display: flex;
  justify-content: center;
}
& ul {
  list-style: none;
  font-size: 5em;
  font-weight: bold;
  text-transform: uppercase;
  font-family: sans-serif;
  & li {
    content: attr(data-content);
    position: relative;
    color: transparent;
    margin-bottom: 0.3em;
  }
  & li:hover {
    cursor: pointer;
  }
  & li:hover:before {
    transform: skewX(10deg);
    left: -10px;
    color: #6495a9;
  }
  & li:hover:after {
    transform: skewX(10deg);
    left: 10px;
  }
  & li:before, li:after {
    transition: cubic-bezier(1, 0, 0, 1) transform 400ms 400ms, cubic-bezier(1, 0, 0, 1) left 400ms 400ms, ease-in-out color 800ms;
    content: attr(data-content);
    position: absolute;
    left: 0;
    top: 0;
    color: #56afd3;
    display: flex;
    overflow: hidden;
    display: flex;
    white-space: nowrap;
  }
  & li:before {
    bottom: 50%;
  }
  & li:after {
    top: 50%;
    height: 50%;
    align-items: flex-end;
  }
  @media all and (max-width: 1070px) {
    font-size: 5em;
  }
  @media all and (max-width: 784px) {
    font-size: 3.8em;
  }
  @media all and (max-width: 519px) {
    padding: 30% 0;
    font-size: 2em;
  }
}
& a{ 
  text-decoration: none;
}
`

const Menu = (color) => {
  const [visibility, setVisibility] = useState("hidden");
  const [style, setStyle] = useState(false);
  const handleClick = () => {
    visibility === "hidden" ? setVisibility("visible") : setVisibility("hidden");
    setStyle(style ? false : true);
  };
const switchColor = color.color === '#111111' ? '#fff' : '#111111';
const menuColor = color.color === '#111111' ? '#111111' : '#fff';

  return (
    <MenuBar>
      {/* TODO <div className="languages">RU / EN</div> */}
      <div className="logo"><Link to="section1" spy={true} smooth={true} offset={-20} duration={500}>
                    <img src={color.color === '#111111' ? Logo : LogoBlack} alt='logo'></img>
                    </Link></div> 
      <div className="navbar" onClick={handleClick} style={style ? { borderRadius: "50%", transition: "all 0.3s ease", border: `${switchColor}` } : {border: ` ${switchColor}`}} >
        <div
          className="first"
          style={
            style
              ? {
                backgroundColor: switchColor,
                transform: "translateY(15px) rotate(45deg)",
                transition: "all 0.5s ease"
              }
              : {
                backgroundColor: switchColor
              }
          }
        />
        <div
          className="second"
          style={style ? {
            backgroundColor: switchColor,
            opacity: 0,
            transition: "all 0.2s ease"
          } : {
              backgroundColor: switchColor
            }}
        />
        <div className="third" style={style ? {
          backgroundColor: switchColor,
          transform: "translateY(-15px) rotate(-45deg)",
          transition: "all 0.5s ease"
        } : {
            backgroundColor: switchColor
          }} />
      </div>

      <div className='menuContent' style={style ? { visibility: 'visible', opacity: 1, transition: "all 1s ease", background: menuColor} : { visibility: 'hidden', opacity: 0 }}>
        <div className="menuContentlist">
          <ul>
            <Link activeClass="active" to="section1" spy={true} smooth={true} offset={-20} duration={500} onClick={handleClick}>
              <li data-content="Home">Home</li>
            </Link>
            <Link activeClass="active" to="section2" spy={true} smooth={true} offset={-20} duration={500} onClick={handleClick}>
              <li data-content="Projects">Projects</li>
            </Link>
            <Link activeClass="active" to="section3" spy={true} smooth={true} offset={-20} duration={500} onClick={handleClick}>
              <li data-content="About Me">About Me</li>
            </Link>
            <Link activeClass="active" to="section4" spy={true} smooth={true} offset={-20} duration={500} onClick={handleClick}>
              <li data-content="Contact Me">Contact Me</li>
            </Link>
          </ul>
        </div>
      </div>
    </MenuBar>
  );
};

export default Menu;
