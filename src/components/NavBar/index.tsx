import { Container } from './styles'

import { Link } from 'react-router-dom'

export const NavBar: React.FC = () => {

    return (
        <Container>
            <Link to="/">Home</Link>
            <Link to="/hotnews">Hot News</Link>
        </Container>
    )

}