import { createContext, ReactNode, useState } from 'react'

import { useNavigate } from 'react-router-dom'

interface SearchContextProps {
    children: ReactNode
}

export type NewsProps = {

    "originalNews": {
        "originalTitle": string,
        "originalClaimant": string | undefined,
        "originalClaimDate": string | undefined
    },
    "newsReview": [
        {
            "publisherName": string,
            "publisherSite": string,
            "reviewDate": string,
            "textualRating": string,
            "title": string,
            "urlNews": string,
            "languageCode": string
        }
    ]
}

type SearchContextType = {
    search: string,
    news: Array<NewsProps>,

    setSearch: (search: string) => void,
    setNews: (news: NewsProps[]) => void,
    fetchNewsOnBackend: () => void
}

const SearchContextInitialValues = {
    search: '',
    news: [],

    setSearch: () => {},
    setNews: () => {},
    fetchNewsOnBackend: () => {}
}

export const SearchContext = createContext<SearchContextType>(SearchContextInitialValues)

export const SearchProvider = ({ children }: SearchContextProps) => {

    const [search, setSearch] = useState('')
    const [news, setNews] = useState<NewsProps[]>([])
    let navigate = useNavigate()

    const fetchNewsOnBackend = async () => {

        try {

            // Making request to backend to get news and set them in the variable
            const responseNews: NewsProps[] = await (await fetch(import.meta.env.VITE_BASE_BACKEND_URL + '/search/' + search)).json()
            setNews(responseNews)
            
            // Redirect to result page
            navigate(`/results/${search.replace(' ', '+')}`)
            
            //Clean input
            setSearch('')

        } catch (err: any) {
            console.error(err.message)
        }
        
    }

    return (

        <SearchContext.Provider value={{ search, setSearch, fetchNewsOnBackend, news, setNews }}>
            { children }
        </SearchContext.Provider>

    )
}