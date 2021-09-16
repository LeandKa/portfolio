import React from 'react'
import PropTypes from 'prop-types'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    scroll-behavior: smooth !important;
  }
  body{
    background:#121214;
    color:#e1e1e6;
    font: 400 16px Roboto,sans-serif;
  }
`

const theme = {
  colors: {
    background: '#121214',
    text: '#e1e1e6',
    primary: '#8257e6',
    secondary: 'white'
  }
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
App.prototype = {
  Component: PropTypes.object.isRequired,
  pageProps: PropTypes.object.isRequired
}
