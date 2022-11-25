import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font: 1rem 'Roboto', sans-serif;
        color: #808791;
        background-color: #141519;
    }

    button {
        cursor: pointer;
    }
`

export const GlobalContentContainer = styled.main`
    height: 100vh;
    width: 100vw;
    
    padding: 0 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
`