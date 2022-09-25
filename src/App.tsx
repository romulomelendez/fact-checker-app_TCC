import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom"

import { SearchPage } from './pages/SearchPage'
import { HotNews } from './pages/HotNews'
import { Results } from './pages/Results'

import { GlobalStyle } from './globalStyles'

export const App: React.FC = () =>

    <BrowserRouter>
        <GlobalStyle />
        <Routes>
            <Route path="/" element={ <SearchPage /> } />
            <Route path="/hotnews" element={ <HotNews /> } />
            <Route path="/results/:search" element={ <Results /> } />
        </Routes>
    </BrowserRouter>