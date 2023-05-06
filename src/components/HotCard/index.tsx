import { Link } from "react-router-dom"

import { ArticleProps } from '../../pages/HotNews'

import { HNContainer, HNHeader, HNTitle, HNSubtitle, HNBody, HNButton, HNPublishDate } from './styles'

type HotCardProps = {
    article: ArticleProps
}

export const HotCard = ({ article }: HotCardProps) =>

    <HNContainer>
        <HNHeader>
            <HNTitle>{ article.title }</HNTitle>
            <HNSubtitle>Author: { article.author }</HNSubtitle>
        </HNHeader>
        <HNBody>
            <HNPublishDate>Pusblish At: { article.publishedAt }</HNPublishDate>
            <HNButton href={ article.topNewsUrl }>Click to check this article</HNButton>
        </HNBody>
    </HNContainer>
