import { createContext, ReactNode, useState } from "react"

interface SearchContextProps {
    children: ReactNode
}

type SearchContextType = {
    search: string;
    setSearch: (search: string) => void,
    handleFactNews: () => void
}

const SearchContextInitialValues = {
    search: '',
    setSearch: () => {},
    handleFactNews: () => {}
}

export const SearchContext = createContext<SearchContextType>(SearchContextInitialValues)

export const SearchProvider = ({ children }: SearchContextProps) => {

    const [search, setSearch] = useState('')

    const handleFactNews = () => {

        try {
            fetch(import.meta.env.VITE_BASE_API_URL + `${search}` + '&key=' + import.meta.env.VITE_API_KEY)
             .then(response => response.json())
             .then(data => {
                console.log(data)
                setSearch('')
             })
        }
        catch (err) {
            console.error(err)
        }

    }

    return (

        <SearchContext.Provider value={{ search, setSearch, handleFactNews }}>
            { children }
        </SearchContext.Provider>

    )
}