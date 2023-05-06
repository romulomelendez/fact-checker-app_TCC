import styled from 'styled-components'

export const Container = styled.div `

    display: grid;
    grid-template-rows: repeat(3, max-content);
    background-color: #d7dbd8;
    row-gap: 10px;

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
    max-width: 100vw;
    width: 100%; 
    gap: 10px;
    padding: 10px;
    justify-content: center;
    align-items: center;
`

export const NewsContainer = styled.div `

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 450px));
    width: 100%;
    height: auto;
    column-gap: 20px;
    row-gap: 40px;
    justify-content: center;     
    justify-items: center;     
    padding: 20px;
`
