import { useState } from 'react'

import { Container, SearchInput, Check } from './styles'

export const SearchPage: React.FC = () => {

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

        <Container>
            <SearchInput type="text" placeholder="Search" value={ search } onChange={ e => setSearch(e.target.value) } />
            <Check onClick={ handleFactNews }>CHECK</Check>
        </Container>

    )

}