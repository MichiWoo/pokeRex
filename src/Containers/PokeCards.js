import React, { useState, useEffect } from 'react'
import { CardPokemon } from '../Components/CardPokemon'
import { Loading, ImgContainer } from '../Containers/ListOfPokemons/styles'
import { SvgPokebolaMini } from '../Components/PokebolaMini'

export const PokeCards = ({ id }) => {
  const [poke, setPoke] = useState([])
  const [load, setLoad] = useState('true')
  
  useEffect(() => {
    async function fecthPokeData() { 
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      const data = await response.json()
      setPoke(data)
    }
    fecthPokeData()
    setTimeout(() => {
      setLoad(false)
    }, 1500)
  }, [])

  return (
    <>
      {
        load
          ? (
            <Loading>
              <span>Loading...</span>
              <ImgContainer>
                <SvgPokebolaMini/>
            </ImgContainer>
            </Loading>
          )
          : (
            <CardPokemon { ...poke } />
          )
      }
    </>
  )
}
