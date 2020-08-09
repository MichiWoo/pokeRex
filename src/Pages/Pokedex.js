import React from 'react'
import { Layout } from '../Components/Layout'
import { Search } from '../Components/Search'
import { ListOfPokemons } from '../Containers/ListOfPokemons'

export const Pokedex = () => {
  return (
    <Layout title='PokeRex' subtitle='¿Cuál es el Poke que estás buscando?'>
      <Search />
      <ListOfPokemons/>
    </Layout>
  )
}