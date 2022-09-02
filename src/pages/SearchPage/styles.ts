import styled from 'styled-components'

export const Container = styled.div `

    display: grid;
    grid-template-rows: repeat(auto-fit, minmax(max-content, max-content));
    place-items: center;
    row-gap: 10px;
    padding: 10px;
    background-color: aqua;

`
export const SearchInput = styled.input `

    padding: 10px;
    font-size: 12pt;
    color: #f7f7f7;
    max-width: 500px;
    width: 100%;

`
export const Check = styled.button `

    padding: 10px;
    max-width: 500px;
    width: 100%;  

`