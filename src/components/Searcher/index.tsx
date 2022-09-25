import { useContext } from 'react'

import { SearchContext } from '../../contexts/SearchContext'

import { Logo } from '../../components/Logo'
import { SearchInput } from '../../components/SearchInput'

import { Check } from './styles'

export const Searcher: React.FC = () => {

    const { handleFactNews } = useContext(SearchContext)

    return (
        <>
            <Logo />
            <SearchInput />
            <Check onClick={ handleFactNews }>CHECK</Check>
        </>
    )

}