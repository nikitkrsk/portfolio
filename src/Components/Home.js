import React, { useEffect } from "react";
import Projects from "./Projects";
import Main from "./Main";
import Menu from "./Menu";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Switch from "react-switch";
import styled from "@emotion/styled";
import usePersistedState from './Helpers/usePersistedState';

const SwitchButton = styled.div`
  position: fixed;
  z-index: 11;
  top: 7em;
  right: 3em;
  @media all and (max-width: 1070px) {
    top: 3em;
    right: 0.35em;
}
`

const Home = () => {
  const [color, setColor] = usePersistedState('color','#111111')
  const [checked, setButton] = usePersistedState('checked', false)


  useEffect(
    () => {
      document.body.style.background = color
    },
    [color]
  )
  const title = 'Nikita Atroshenko - Web Developer '
  useEffect(() => {
    document.title = title;
  }, [title]);
  
  const handleChange = (checked) => {
    setButton(checked)
    checked ? setColor('#F5F5F5') : setColor('#111111')
  }
 
  return (
    <>
    <SwitchButton>
      <label>
        <Switch
          checked={checked}
          onChange={handleChange}
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
          className="react-switch"

          id="material-switch"
        />
      </label>
      </SwitchButton>
      <Menu color={color} />
      <Main color={color} />
      <Projects color={color} />
      <AboutMe color={color} />
      <ContactMe color={color} />
    </>
  );
};

export default Home;
