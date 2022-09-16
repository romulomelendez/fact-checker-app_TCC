import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle `

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
  }

  body {
    background-color: #f7f7f7;
    font-family: 'Open Sans', sans-serif;
    height: 100vh;
  }

`

export const Container = styled.div `

  display: grid;
  row-gap: 100px;
  align-items: center;

`
