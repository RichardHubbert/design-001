/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      allContentfulLink(sort: {fields: [createdAt], order: ASC}) {
        edges {
          node {
            title
            url
            createdAt
          }
        }
      }
    }
  `)

  return (
    <>
    <Header />
      <div>
        {children}
        <Footer data={data}>
        Sugar plum dessert pudding apple pie pudding powder cupcake ice cream. <a href="mailto:richardhubbert@gmail.com">Email Me</a> Croissant wafer tart cake croissant cupcake. 

        </Footer>
        <footer>
          ChasesideDesign © {new Date().getFullYear()}
          {` `}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout


