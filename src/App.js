import React from 'react'
import { Router } from '@reach/router'
import { Home } from './pages/Home'
import { Pokedex } from './pages/Pokedex'
import { Detail } from './pages/Detail'
import { Footer } from './components/Footer'
import { GlobalStyle } from './styles/GlobalStyles'

export const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <Home path='/' />
      <Pokedex path='/pokedex' />
      <Detail path='/detail/:detailId' />
    </Router>
    <Footer />
  </>
)