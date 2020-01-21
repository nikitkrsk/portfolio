import React from "react";
import styled from "@emotion/styled";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import EmailIcon from "@material-ui/icons/Email";
const Section = styled.div`
  height: 100%;
  width: 100%;
  
`;
const Text = styled.div`
 
  & .contactInfo {
    display: grid;
    justify-items: center;
    align-items: center;
    font-size: 2em;
    & p {
      margin: 0;
      & a {
        text-decoration:none;
        cursor: pointer;
      }
    }
  }
  & .disclaimer{
    display: grid;
    justify-items: center;
    align-items: center;
    font-size: 1rem;
    padding: 10px 20px;
    text-align: center;
  }
  & .badges {
    display: flex;
    justify-content: center;
    & div {
      font-size: 1.5em;
      display: grid;
      justify-items: center;
      padding: 20px;
      & a {
        text-decoration: none;
       
      }
    }
  }
  @media all and (max-width: 1070px) {
    & .disclaimer{
      font-size: 0.8rem;
    }
    & .contactInfo {
      font-size: 1em;
    }
    & .badges {
      & div {
        font-size: 1em;
        display: grid;
        justify-items: center;
        padding: 5px;
      }
    }
  }
`;

const Main = (color) => {
  const changeColor = color.color === '#111111' ? '#fff' : '#111111'
  const year = new Date().getFullYear();
  return (
    <Section id="section4">
      <Text style={{ color: changeColor }}>
        <div className="contactInfo">
          <p>
            <PhoneIphoneIcon /> <a href="tel:+359899343716" 
            style={{ color: changeColor }}>+359 89 934 3716</a>
          </p>
          <p>
            <EmailIcon /><a href="mailto:hi@atroshenkonikita.com?subject=Hello%20Nikita" 
            style={{ color: changeColor }}> hi@atroshenkonikita.com </a>
          </p>
        </div>
        <div className="badges">
          <div>
            <p>CodeWars:</p>
            <a href="https://www.codewars.com/users/nikitkrsk" target="_blank" rel="noopener noreferrer"
            style={{ color: changeColor }}>
              <img src="https://www.codewars.com/users/nikitkrsk/badges/micro" alt='codewars' />
            </a>
          </div>
          <div>
            <p>LinkedIn:</p>
            <a
              href="https://www.linkedin.com/in/nikita-atroshenko/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: changeColor}}
            >
              <LinkedInIcon style={{ fontSize: 50 }} />
            </a>
          </div>
          <div>
            <p>GitHub:</p>
            <a href="https://github.com/nikitkrsk" target="_blank" 
             rel="noopener noreferrer"
            style={{ color: changeColor }}>
              <GitHubIcon style={{ fontSize: 50 }} />
            </a>
          </div>
        </div>
        <hr style={{margin: '0 20%'}}/>
        <div className='disclaimer'>
        {year === 2020 ? year : `2020 - ${year}`} | Designed, Created and Maintained by Me.
        </div>
      </Text>
    </Section>
  );
};

export default Main;
