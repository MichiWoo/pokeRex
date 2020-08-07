import React from 'react'
import { Router } from '@reach/router'
import './styles/fonts.css'
import { Home } from './Pages/Home'
import { Pokedex } from './Pages/Pokedex'
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
    </Router>
    <Footer />
  </>
)