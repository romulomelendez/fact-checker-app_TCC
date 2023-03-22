import { NewsProps } from '../../contexts/SearchContext'

import { CardContainer, CardHeader, CardTitle, CardContent } from './styles'

type CardProps = {
    report: NewsProps,
}

export const Card = ({ report }: CardProps) => 
(
        <CardContainer variant={report.newsReview[0].textualRating}>
            <CardHeader>
                <a href={ report.newsReview[0].urlNews } target="_blank">
                    <CardTitle>{ report.originalNews.originalTitle }</CardTitle>
                </a>
            </CardHeader>
            <CardContent>
                <h5>Date: { report.originalNews.originalClaimDate }</h5>
                <h5>Rating: { report.newsReview[0].textualRating }</h5>
                <h5>Lang: { report.newsReview[0].languageCode }</h5>
            </CardContent>                        
        </CardContainer>
    )