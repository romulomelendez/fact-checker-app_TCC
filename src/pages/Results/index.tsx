import { useParams } from 'react-router-dom'

export const Results: React.FC = () => {

    let { search } = useParams()

    return (
        <>
            <h1>RESULT PAGE</h1>
            {
                console.log(search)
            }

        </>
    )

}