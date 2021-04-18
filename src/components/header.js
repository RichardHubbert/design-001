import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from '../images/logo-designcode.svg'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img src={logo}  width="" /></Link>
      <Link to="/courses">Courses</Link>
      <Link to="/dowmloads">Downloads</Link>
      <Link to="/workshops">Workshops</Link>
      <Link to="/buy"><button>Buy</button></Link>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
