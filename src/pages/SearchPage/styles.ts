import styled from 'styled-components'

export const Container = styled.div `

    display: grid;
    grid-template-rows: repeat(2, max-content);
    place-items: center;
    row-gap: 40px;
    padding: 10px;
    max-width: 100vw;
    margin-top: -50px;

`
export const SearchInput = styled.input `

    padding: 15px;
    font-size: 15pt;
    color: gray;
    border-radius: 50px;
    border: 2px solid #3498DB;
    max-width: 500px;
    width: 100%;
    outline: none;

`
export const Check = styled.button `

    font-size: 12pt;
    font-weight: 700;
    padding: 10px;
    max-width: 300px;
    border-radius: 50px;
    border: none;
    height: 40px;
    width: 100%;
    color: #f7f7f7;
    background-color: #3498DB;
    cursor: pointer;
    transition: background-color 0.5s;

    :hover {
        background-color: #21618C;
    }

`