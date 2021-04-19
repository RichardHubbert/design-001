import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import logoFigma from '../images/logo-figma.png'
import logoFramer from '../images/logo-framer.png'
import logoInvision from '../images/logo-invision.png'
import logoReact from '../images/logo-react.png'
import logoSketch from '../images/logo-sketch.png'
import logoSwift from '../images/logo-swift.png'
import cardOne from '../images/Wallpaper2.jpg'
import Card from "../components/Card"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" /> 
    <div className="Hero">
      <div className="HeroGroup">
        <h1>We <br />Design and Develop <br />UI | UX</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Watch the Video</Link> <br /> 
        <div className="Logos">
          <img src={logoFigma}  width="50" />  
          <img src={logoFramer}  width="50" />  
          <img src={logoInvision}  width="50" />  
          <img src={logoReact}  width="50" />  
          <img src={logoSketch}  width="50" />  
          <img src={logoSwift}  width="50 " />  
        </div>
        <svg width="100%" height="172" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="white">
            <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s" values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;

            M0 87.1596C316 87.1597 444 160 884 52.0001C1324 -55.9999 1320.29 34.966 1538 71.251C1814 117.251 2156 189.252 2560 87.1597V233.161L0 233.161V87.1596Z;

            M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;

            M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z
            "
           />
          </path> 
        </svg>
      </div>
    </div> 
    
    <div className="Cards">
      <h2>11 Courses, more coming</h2>
      <div className="CardGroup">
        <Card 
          image="images/wallpaper.jpg"
          title="Design System"
          text="12 Sections"/>
        <Card 
          image="images/wallpaper2.jpg"
          title="React for Designers"
          text="12 Sections"/>
        <Card 
          image="images/wallpaper3.jpg"
          title="Sound Design"
          text="5 Sections"/>
        <Card 
          image="images/wallpaper4.jpg"
          title="ARKit 2"
          text="10 Sections"/>
      </div>
    </div>
  </Layout>
)

export default IndexPage






