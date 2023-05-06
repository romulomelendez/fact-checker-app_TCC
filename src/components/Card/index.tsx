import { NewsProps } from '../../contexts/SearchContext'

import { CardContainer, CardHeader, CardTitle, CardContent } from './styles'

type CardProps = {
    report: NewsProps,
}

export const Card = ({ report }: CardProps) =>
    (
        <CardContainer variant={report.newsReview[0].textualRating}>
            <CardHeader>
                <CardTitle>{ report.originalNews.originalTitle }</CardTitle>
            </CardHeader>
            <CardContent>

                {
                    report.originalNews.originalClaimDate != ''
                      && <h5>Date: { report.originalNews.originalClaimDate }</h5> 
                }

                <h5>Status: { report.newsReview[0].textualRating }</h5>
            </CardContent>                        
        </CardContainer>
    )
