import { SearchPage } from './pages/SearchPage'

import { NavBar } from './components/NavBar'

import { Container, GlobalStyle } from './globalStyles'

export const App: React.FC = () =>

    <Container>
        <GlobalStyle />
        <NavBar />
        <SearchPage />
    </Container>