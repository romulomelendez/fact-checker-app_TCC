import { useParams } from 'react-router-dom'

import { SearchInput } from '../../components/SearchInput'

import {} from './styles'

export const Results: React.FC = () => {

    let { search } = useParams()

    return (
        <>
            <SearchInput />
            {
                console.log(search)
            }

        </>
    )

}