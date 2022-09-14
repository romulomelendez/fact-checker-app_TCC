import { SearchPage } from './pages/SearchPage'

import { NavBar } from './components/NavBar'

import { GlobalStyle } from './globalStyles'

export const App: React.FC = () =>

    <>
        <GlobalStyle />
        <NavBar />
        <SearchPage />
    </>