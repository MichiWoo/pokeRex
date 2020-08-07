import React from 'react'
import { Layout } from '../Components/Layout'
import { Search } from '../Components/Search'

export const Pokedex = () => {
  return (
    <Layout title='PokeRex' subtitle='¿Cuál es el Poke que estás buscando?'>
      <Search />
      <span>Pokemons List</span>
    </Layout>
  )
}