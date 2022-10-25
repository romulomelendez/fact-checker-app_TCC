import styled from 'styled-components'

export const CardContainer = styled.div `

    display: grid;
    grid-template-rows: repeat(2, max-content);
    row-gap: 10px;
    height: max-content;
    max-width: 400px;
    padding: 10px;
    background-color: #3498DB;
    color: #21618C;
    border: 3px solid #21618C;
    border-radius: 10px;
    cursor: pointer;

`

export const CardHeader = styled.div ` padding: 10px; `

export const CardTitle = styled.h2 ` color: #fff; `

export const CardContent = styled.div `

    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    font-size: 13pt;

`