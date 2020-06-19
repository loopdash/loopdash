/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"

const Wrapper = styled.div`
  display: flex;
  align-content: center;
  background: red;
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <main>{children}</main>
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
