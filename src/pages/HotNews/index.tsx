import { useState, useEffect } from 'react'

import { NavBar } from '../../components/NavBar'

import { Container } from './styles'

export const HotNews: React.FC = () => {

    const [articles, setArticles] = useState([{}]) 

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
            {
                articles?.map((article: any, index: number) => (
                    <div key={index}>
                        <h2>{ article.title }</h2>
                        <h5>{ article.author }</h5>
                        <a href={ article.topNewsUrl}>Click to read</a>
                        <p>{ article.publishedAt }</p>
                    </div>
                ))
            }
        </Container>
    
    )
}