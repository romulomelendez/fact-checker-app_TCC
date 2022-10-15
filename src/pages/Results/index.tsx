import { useContext } from 'react'

import { SearchContext } from '../../contexts/SearchContext'

import { SearchInput } from '../../components/SearchInput'

import { Container, Check, SearchContainer, NewsContainer } from './styles'

export const Results: React.FC = () => {

    const { news, fetchNewsOnBackend } = useContext(SearchContext)   

    return (
        <Container>
            <SearchContainer>

                <SearchInput />
                <Check onClick={ fetchNewsOnBackend }>CHECK</Check>

            </SearchContainer>
            <NewsContainer>

                {
                    news.length != 0
                        && news.map((report, index) => <p key={ index }>{ report.originalNews.originalTitle }</p>)
                }

            </NewsContainer>
        </Container>
    )

}