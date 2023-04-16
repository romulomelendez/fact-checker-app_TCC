import { useState, useEffect } from 'react'

import { NavBar } from '../../components/NavBar'
import { HotCard } from '../../components/HotCard'

import { Container, HNSection } from './styles'

export type ArticleProps = {
    author: string,
    title: string,
    topNewsUrl: string,
    publishedAt: string
}

export const HotNews: React.FC = () => {


    const [articles, setArticles] = useState<ArticleProps[]>([]) 

    useEffect( () => {

        const fetchData = async () => {
            const response = await (await fetch(import.meta.env.VITE_BASE_BACKEND_URL + '/hotnews')).json()
            setArticles(response)
        }

        fetchData()

    }, [])

    return (

        <Container>
            <NavBar />
            <h1>Hot News</h1>
            <HNSection>
                {
                    articles?.map((article, index: number) => <HotCard key={index} article={article} />)
                }
            </HNSection>
        </Container>
    
    )
}