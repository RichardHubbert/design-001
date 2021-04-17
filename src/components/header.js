import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img src="images/wallpaper2.jpg" width="30" />Header Link</Link>
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
