import React from 'react'
import { Layout } from '../Components/Layout'
import { HeaderGray } from '../Components/HeaderGray'
import { Search } from '../Components/Search'
import { ListOfPokemons } from '../Containers/ListOfPokemons'

export const Pokedex = () => {
  return (
    <Layout title='PokeRex' subtitle='Aplicación para buscar pokemones'>
      <HeaderGray />
      <Search />
      <ListOfPokemons/>
    </Layout>
  )
}