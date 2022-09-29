import { createContext, ReactNode, useState } from "react"

interface SearchContextProps {
    children: ReactNode
}

type NewsProps = {

    "originalNews": {
        "originalTitle": string,
        "originalClaimant": string,
        "originalClaimDate": string
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
    news: Array<NewsProps> | undefined,

    setSearch: (search: string) => void,
    setNews: (news: Array<NewsProps>) => void,
    fetchNews: () => void
}

const SearchContextInitialValues = {
    search: '',
    news: [],

    setSearch: () => {},
    setNews: () => {},
    fetchNews: () => {}
}

export const SearchContext = createContext<SearchContextType>(SearchContextInitialValues)

export const SearchProvider = ({ children }: SearchContextProps) => {

    const [search, setSearch] = useState('')
    const [news, setNews] = useState<NewsProps[]>([])

    const handleNews = ( rawDatas: NewsProps[] ) => {

        try {
            
            let arrayNewsObj = [] as NewsProps[]
            rawDatas.map((item: any) => {

                let originalNews = {
    
                    "originalTitle": item.text,
                    "originalClaimant": item.claimant,
                    "originalClaimDate": item.claimDate   

                }

                let newsReview = [] as object[]
                item.claimReview.map((review: any) => {

                    newsReview = [{

                            "publisherName": review.publisher.name,
                            "publisherSite": review.publisher.site,
                            "reviewDate": review.reviewDate,
                            "textualRating": review.textualRating,
                            "title": review.title,
                            "urlNews": review.url,
                            "languageCode": review.languageCode
                        }
                    ]   

                })
                
                // @ts-ignore:next-line
                originalNews.newsReview = newsReview
                // @ts-ignore:next-line
                arrayNewsObj.push(originalNews)
                
            })
            
            setNews(arrayNewsObj)

        } catch (err) {
            console.error(err)
        }
        
    }

    const fetchNews = () => {

        try {

            let rawDataNews = [] as Array<NewsProps>

            fetch(import.meta.env.VITE_BASE_API_URL + `${search}` + '&key=' + import.meta.env.VITE_API_KEY)
             .then(response => response.json())
             .then(data => {
                rawDataNews = data.claims
                setSearch('')
            }).then( () => handleNews(rawDataNews) )

        }
        catch (err) {
            console.error(err)
        }

    }

    return (

        <SearchContext.Provider value={{ search, setSearch, fetchNews, news, setNews }}>
            { children }
        </SearchContext.Provider>

    )
}