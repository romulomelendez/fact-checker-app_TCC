import styled from 'styled-components'

export const Container = styled.div `

    display: grid;
    grid-template-columns: repeat(2, minmax(150px, 200px));
    
    place-items: center;
    justify-content: center;
    height: 75px;
    width: 100vw;
    background-color: #3498DB;

    a {
        text-decoration: none;
        color: #f7f7f7;
        font-size: 15pt;
        font-weight: 700;
    }

`