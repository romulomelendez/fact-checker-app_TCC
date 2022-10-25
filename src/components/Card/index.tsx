import { NewsProps } from '../../contexts/SearchContext'

import { CardContainer, CardHeader, CardTitle, CardContent } from './styles'

type CardProps = {
    report: NewsProps,
}

export const Card = ({ report }: CardProps) => {
    
    return (
        <CardContainer>
            <CardHeader>
                <CardTitle>{ report.originalNews.originalTitle }</CardTitle>
            </CardHeader>
            <CardContent>
                <h5>Date: { report.originalNews.originalClaimDate }</h5>
                <h5>Rating: { report.newsReview[0].textualRating }</h5>
                <h5>Lang: { report.newsReview[0].languageCode }</h5>
            </CardContent>                        
        </CardContainer>
    )
}