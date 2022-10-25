import { useContext } from 'react'

import { SearchContext } from '../../contexts/SearchContext'

import { SearchInput } from '../../components/SearchInput'

import { Container, Check, SearchContainer, NewsContainer, Card, CardTitle, CardHeader, CardContent } from './styles'

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
                        && news.map((report, index) => 
                        
                            <Card key={index}>
                                <CardHeader>
                                    <CardTitle>{ report.originalNews.originalTitle }</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <h5>Date: { report.originalNews.originalClaimDate }</h5>
                                    <h5>Rating: { report.newsReview[0].textualRating }</h5>
                                    <h5>Lang: { report.newsReview[0].languageCode }</h5>
                                </CardContent>                        
                            </Card>

                        )
                }

            </NewsContainer>
        </Container>
    )

}