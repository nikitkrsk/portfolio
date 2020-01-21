import lerp from "lerp"
import React, { Suspense, useRef, useEffect } from "react"
import { Canvas, Dom, useFrame, useLoader } from "react-three-fiber"
import { TextureLoader, LinearFilter } from "three"
import { Block, useBlock } from "./Three-js/blocks"
import state from "./Three-js/store"
import "./Three-js/CustomMaterial"
import "./styles.css"
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { SemipolarLoading } from 'react-loadingg';

const GoBack = styled.div`
font-size: 2em;
display:flex;
align-items: center;
padding: 30px 10px; 
text-decoration: none;
color: fff;
`
function Plane({ color = "white", map, ...props }) {
  const { viewportHeight, offsetFactor } = useBlock()
  const material = useRef()
  let last = state.top.current
  useFrame(() => {
    const { pages, top } = state
    material.current.scale = lerp(material.current.scale, offsetFactor - top.current / ((pages - 1) * viewportHeight), 0.1)
    material.current.shift = lerp(material.current.shift, (top.current - last) / 150, 0.1)
    last = top.current
  })
  return (
    <mesh {...props}>
      <planeBufferGeometry attach="geometry" args={[1, 1, 32, 32]} />
      <customMaterial ref={material} attach="material" color={color} map={map} />
    </mesh>
  )
}

function Cross() {
  const ref = useRef()
  const { viewportHeight } = useBlock()
  useFrame(() => {
    const curTop = state.top.current
    const curY = ref.current.rotation.z
    const nextY = (curTop / ((state.pages - 1) * viewportHeight)) * Math.PI
    ref.current.rotation.z = lerp(curY, nextY, 0.1)
  })
  return (
    <group ref={ref} scale={[2, 2, 2]}>
      <Plane scale={[1, 0.2, 0.2]} color="#000" />
      <Plane scale={[0.2, 1, 0.2]} color="#000" />
    </group>
  )
}

function Content({ left, children, map }) {
  const { contentMaxWidth, canvasWidth, margin } = useBlock()
  const aspect = 1.75
  const alignRight = (canvasWidth - contentMaxWidth - margin) / 2
  return (
    <group position={[alignRight * (left ? -1 : 1), 0, 0]}>
      <Plane scale={[contentMaxWidth, contentMaxWidth / aspect, 1]} color="#bfe2ca" map={map} />
      {children}
    </group>
  )
}

function Stripe() {
  const { contentMaxWidth } = useBlock()
  return <Plane scale={[100, contentMaxWidth, 1]} rotation={[0, 0, Math.PI / 4]} position={[0, 0, -1]} color="#000" />
}

function Pages() {
  const textures = useLoader(TextureLoader, state.images)
  // eslint-disable-next-line no-unused-vars, no-sequences
  const [img1, img2, img3, img4, img5, img6] = textures.map(texture => ((texture.minFilter = LinearFilter), texture))
  const { contentMaxWidth, mobile } = useBlock()
  const aspect = 1.75
  const pixelWidth = contentMaxWidth * state.zoom
  return (
    <>
     
      {/* First section */}
      <Block factor={1.5} offset={0}>
        <Content left map={img4}>
          <Dom style={{ width: pixelWidth / (mobile ? 1 : 2), textAlign: "left" }} position={[-contentMaxWidth / 2, -contentMaxWidth / 2 / aspect - 0.4, 1]}>
          European Moving is an experienced low-cost removals company operating across Europe for over 5 years.<br />
          Checkout Website was one of my tasks during my working practice there, as well as their pricing calculator and other website stuff.
          </Dom>
        </Content>
      </Block>
      {/* Second section */}
      <Block factor={2.0} offset={1}>
        <Content map={img5}>
        <Block factor={-0.5}>
            <Cross />
          </Block>
          <Dom style={{ width: pixelWidth / (mobile ? 1 : 2), textAlign: "right" }} position={[mobile ? -contentMaxWidth / 2 : 0, -contentMaxWidth / 2 / aspect - 0.4, 1]}>
          This website was entirely designed and coded by me. <br />
          The function of the website is clients' deposit and record payment proceeded on company's bookkeeping platform. 
          </Dom>
        </Content>
      </Block>
      {/* Stripe */}
      <Block factor={-1.0} offset={1}>
        <Stripe />
      </Block>
      {/* Last section */}
      <Block factor={1.5} offset={2}>
        <Content left map={img6}>
          
          <Dom prepend style={{ width: pixelWidth / (mobile ? 1 : 2), textAlign: "left" }} position={[-contentMaxWidth / 2, -contentMaxWidth / 2 / aspect - 0.4, 1]}>
          Customer journey was completely my idea and implementation with following Jest tests while developing.  
          </Dom>
        </Content>
      </Block>
    </>
  )
}

function Startup() {
  const ref = useRef()
  useFrame(() => (ref.current.material.opacity = lerp(ref.current.material.opacity, 0, 0.025)))
  return (
    <mesh ref={ref} position={[0, 0, 200]} scale={[100, 100, 1]}>
      <planeBufferGeometry attach="geometry" />
      <meshBasicMaterial attach="material" color="#dfdfdf" transparent />
    </mesh>
  )
}

function App() {
  const scrollArea = useRef()
  const onScroll = e => (state.top.current = e.target.scrollTop)
  useEffect(() => void onScroll({ target: scrollArea.current }), [])
  const title = 'European Moving Checkout'
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <>
      <Canvas style={{background: '#111111'}} orthographic camera={{ zoom: state.zoom, position: [0, 0, 500] }}>
        <Suspense fallback={<Dom center className="loading" children={<SemipolarLoading size='large' /> } />}>
          <Pages />
          <Startup />
        </Suspense>
      </Canvas>
      <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
        <div style={{ height: `${state.pages * 100}vh` }} />
        <Link to="/" style={{ textDecoration: 'none', color: 'white'}}><GoBack><ArrowBackIcon style={{ fontSize: 50 }}/> Go Back</GoBack></Link>
      </div>
    </>
  )
}

export default App;

