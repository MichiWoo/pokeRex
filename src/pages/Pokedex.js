import React, { useState, useEffect } from 'react'
import { Layout } from '../components/Layout'
import { HeaderGray } from '../components/HeaderGray'
import { Search } from '../components/Search'
import { ListOfPokemons } from '../containers/ListOfPokemons'
import { PokeCards } from '../containers/PokeCards'

export const Pokedex = () => {
  const [poke, setPoke] = useState('')
  const [showCard, setShowCard] = useState(true)

  const onSubmit = ({ textPoke }) => {
    setPoke(textPoke)
    setShowCard(true)
  }

  const onChange = ({ textPoke }) => {
    setPoke(textPoke)
  }

  const onError = ({ error }) => {
    console.log(error)
    setShowCard(!error)
  }

  return (
    <Layout title='PokeRex' subtitle='Aplicación para buscar pokemones'>
      <HeaderGray />
      <Search onSubmit={onSubmit} onChange={onChange} />
      {
        poke === ''
          ? (
            <ListOfPokemons />
          )
          :
          showCard
            ? (
              <PokeCards name={poke} onError={onError} />
              )
            : <p>Error ...</p>
      }
    </Layout>
  )
}