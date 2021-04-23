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
import Card from "../components/Card";
import Section from "../components/Section";
import Wave from "../components/Wave";
import staticdata from '../../staticdata.json'
import Cell from "../components/Cell";
import styled from 'styled-components'

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 50px;
  text-transform: uppercase;
  background: linear-gradient(104deg, #680fdd 10%,#11dfee 50%, #a9ec0d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width:720px) {
    grid-template-columns: repeat(1, 1fr);
  }
`



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
        <Wave />
      </div>
    </div> 
    
    <div className="Cards">
      <h2>11 Courses, more coming</h2>
      <div className="CardGroup">
      <Link to="http://www.chasesidedesign.com">
        <Card 
          image="images/wallpaper.jpg"
          title="Design System"
          text="12 Sections"/></Link>
      <Link to="http://www.chasesidedesign.com">
        <Card 
          image="images/wallpaper2.jpg"
          title="React for Designers"
          text="12 Sections"/></Link>
      <Link to="http://www.chasesidedesign.com">          
        <Card 
          image="images/wallpaper3.jpg"
          title="Sound Design"
          text="5 Sections"/></Link>
      <Link to="http://www.chasesidedesign.com">         
        <Card 
          image="images/wallpaper4.jpg"
          title="ARKit 2"
          text="10 Sections"/></Link>
      </div>
    </div>
    <Section
      image="images/wallpaper.jpg"
      logo="images/logo-react.png"
      title="React for Designers"
      text="Toffee macaroon jelly beans marzipan cupcake pudding cheesecake wafer topping. Cotton candy biscuit donut cake macaroon. Caramels topping pastry. Chocolate cake gingerbread jujubes ice cream cupcake cotton candy dessert jelly-o biscuit. Pastry cake cookie gingerbread chupa chups marzipan donut dragée. Caramels powder dragée chocolate cake. Lollipop sesame snaps chocolate bar wafer chocolate bar chocolate sesame snaps chocolate bar. Chocolate donut macaroon powder cotton candy icing fruitcake donut cotton candy. Fruitcake liquorice pudding jelly-o gummies bear claw chupa chups biscuit cheesecake. Soufflé sweet cake. Bear claw sesame snaps bear claw soufflé jelly pudding. Cookie jelly-o ice cream powder cake. Marzipan biscuit cotton candy cotton candy croissant cake."
    />
    
    <SectionCaption>12 Sections - 6 hours</SectionCaption>
    <SectionCellGroup>
    {staticdata.cells.map(cell => (
        <Cell 
          title={cell.title}
          image={cell.image} />
      ))}
    </SectionCellGroup>
  </Layout>
)



export default IndexPage







