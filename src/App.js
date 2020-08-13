import React from 'react'
import { Router } from '@reach/router'
import { Home } from './Pages/Home'
import { Pokedex } from './Pages/Pokedex'
import { Detail } from './Pages/Detail'
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'
import { GlobalStyle } from './styles/GlobalStyles'

export const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Router>
      <Home path='/' />
      <Pokedex path='/pokedex' />
      <Detail path='/detail/:detailId' />
    </Router>
    <Footer />
  </>
)