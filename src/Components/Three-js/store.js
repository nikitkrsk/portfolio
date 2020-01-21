import { createRef } from "react"

const state = {
  sections: 3,
  pages: 3,
  zoom: 75,
  images: ["/img1.png", "/img2.png", "/img3.png", "/img4.png", "/img5.png", "/img6.png"],
  top: createRef()
}

export default state
