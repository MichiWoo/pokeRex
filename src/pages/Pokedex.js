import React, { useState, useEffect } from 'react'
import { Layout } from '../components/Layout'
import { HeaderGray } from '../components/HeaderGray'
import { Search } from '../components/Search'
import { ListOfPokemons } from '../containers/ListOfPokemons'
import { PokeCards } from '../containers/PokeCards'
import { Loading } from '../containers/ListOfPokemons/styles'

export const Pokedex = () => {
  const [poke, setPoke] = useState('')
  const [loading, setLoading] = useState(true)

  const onSubmit = ({ textPoke }) => {
    setLoading(true)
    setTimeout(() => {
      setPoke(textPoke)
      setLoading(false)
    }, 1000)
  }

  return (
    <Layout title='PokeRex' subtitle='Aplicación para buscar pokémons'>
      <HeaderGray />
      <Search onSubmit={onSubmit} />
      {
        poke === ''
          ? (
            <ListOfPokemons />
          )
          :
          loading
            ? <Loading />
            : (
                <PokeCards name={poke} />
              )
      }
    </Layout>
  )
}