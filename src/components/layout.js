/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import "./layout.css"

const Wrapper = styled.div`
  align-items: center;
  background-image: linear-gradient(to bottom right, #1c70e1, #339eff);
  color: #fff;
  display: flex;
  height: 100%;
  justify-content: center;
  flex-direction: column;
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
