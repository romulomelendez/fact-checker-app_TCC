import { useContext } from 'react'

import { SearchContext } from '../../contexts/SearchContext'

import { SearchInput } from '../../components/SearchInput'

import { Container, Check, SearchContainer, NewsContainer } from './styles'

export const Results: React.FC = () => {

    const { fetchNews } = useContext(SearchContext)   

    return (
        <Container>
            <SearchContainer>

                <SearchInput />
                <Check onClick={ fetchNews }>CHECK</Check>

            </SearchContainer>
            <NewsContainer>

                

            </NewsContainer>
        </Container>
    )

}