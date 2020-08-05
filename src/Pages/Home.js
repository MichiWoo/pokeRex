import React from 'react'
import { Header } from '../Components/Header'
import { Main, Title, Search } from '../styles/styles'

export const Home = () => {
  return (
    <Main>
      <Header />
      <Title>¿Cuál es el pokemon que estás buscando?</Title>
      <Search type="text" />
    </Main>
  )
}
