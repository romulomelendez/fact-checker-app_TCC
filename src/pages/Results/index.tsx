import { useContext } from 'react'

import { SearchContext } from '../../contexts/SearchContext'

import { SearchInput } from '../../components/SearchInput'

import { Container, Check, SearchContainer, NewsContainer, CardContainer, Card, CardHeader, CardContent, ReviewHeader, ReviewContent } from './styles'

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
                                    <h3>Original Title: { report.originalNews.originalTitle }</h3>
                                    <h4>Rumor Origin: { report.originalNews.originalClaimant }</h4>
                                    <h5>Date: { report.originalNews.originalClaimDate }</h5>
                                </CardHeader>
                                <CardContent>
                                    {
                                        report.newsReview.map( review => 
                                            <CardContainer>
                                                <ReviewHeader>
                                                    <h3>Publisher Name: { review.publisherName }</h3>
                                                    <h4>Publisher Site: { review.publisherSite }</h4>
                                                    <h5>Review Date: { review.reviewDate }</h5>
                                                </ReviewHeader> 
                                                <ReviewContent>
                                                    <h4>Textual Rating: { review.textualRating }</h4>
                                                    <h5>Review Site: { review.urlNews }</h5>
                                                    <h6>Language Code: { review.languageCode }</h6>
                                                </ReviewContent>
                                            </CardContainer>
                                        )
                                    }
                                </CardContent>                        
                            </Card>

                        )
                }

            </NewsContainer>
        </Container>
    )

}