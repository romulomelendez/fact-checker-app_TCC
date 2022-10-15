import { useContext } from 'react'

import { SearchContext } from '../../contexts/SearchContext'

import { Input } from './styles'

export const SearchInput: React.FC = () => {

    const { search, setSearch, fetchNewsOnBackend } = useContext(SearchContext)

    return (

        <Input type="text" placeholder="Search" value={ search } onChange={ e => setSearch(e.target.value) }
            onKeyUp={ e => {
                    e.key === 'Enter'
                    && search.length !== 0
                    && fetchNewsOnBackend()
                }
            }
        />   
  
    )
    
}