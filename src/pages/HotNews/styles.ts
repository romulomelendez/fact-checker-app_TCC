import styled from 'styled-components'

export const Container = styled.div `

    display: grid;
    grid-template-rows: repeat(2, max-content);
    place-items: center;
    row-gap: 40px;
    max-width: 100vw;

`

export const HNSection = styled.section `

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 650px));
    row-gap: 40px;
    max-height: max-content;
    padding: 6px;

`