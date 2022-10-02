import styled from 'styled-components'

export const Container = styled.div `

    display: grid;
    grid-template-rows: 150px max-content;
    padding: 20px;
    place-items: center;
    height: 100vh;

`

export const Check = styled.button `

    font-size: 12pt;
    font-weight: 700;
    padding: 10px;
    max-width: 300px;
    border-radius: 50px;
    border: none;
    height: 50px;
    color: #f7f7f7;
    background-color: #3498DB;
    cursor: pointer;
    transition: background-color 0.5s;

    :hover {
        background-color: #21618C;
    }

`

export const SearchContainer = styled.div `

    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 10px;
    padding: 10px;
    justify-content: center;
    align-items: center;

`

export const NewsContainer = styled.div ``