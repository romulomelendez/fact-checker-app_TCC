import { useState } from 'react'

import { Logo } from '../../components/Logo'

import { SearchInput, Check } from './styles'

export const Searcher: React.FC = () => {

    const [search, setSearch] = useState('')

    const handleFactNews = () => {

        try {
            fetch(import.meta.env.VITE_BASE_API_URL + `${search}` + '&key=' + import.meta.env.VITE_API_KEY)
             .then(response => response.json())
             .then(data => console.log(data))
        }
        catch (err) {
            console.error(err)
        }

    }

    return (
        <>
            <Logo />
            <SearchInput type="text" placeholder="Search" value={ search } onChange={ e => setSearch(e.target.value) } />
            <Check onClick={ handleFactNews }>CHECK</Check>
        </>
    )

}