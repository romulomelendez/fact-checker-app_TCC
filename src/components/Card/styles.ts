import styled from 'styled-components'

type CssProps = {
    variant: string
}

export const CardContainer = styled.div `

    display: grid;
    grid-template-rows: repeat(2, max-content);
    row-gap: 10px;
    height: max-content;
    max-width: 400px;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;

    ${({ variant }: CssProps) => variant === 'Verdadeiro'
        ? `
            background-color: #3498DB;
            border: 3px solid #21618C;
            color: #21618C; 
        `
        :
            variant === 'Verdadeiro, mas...' 
            ? `
                background-color: #d67427;
                border: 3px solid #78451e;
                color: #78451e;   
            ` : `
                background-color: #c94b42;
                border: 3px solid #6e2924;
                color: #6e2924; 
            `
    }
`

export const CardHeader = styled.div `
    
    padding: 10px;

    a {

        text-decoration: none;
        :hover {
            color: white;
            text-decoration: underline;
        }
    }

`

export const CardTitle = styled.h2 ` color: #fff; `

export const CardContent = styled.div `

    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    font-size: 13pt;

`