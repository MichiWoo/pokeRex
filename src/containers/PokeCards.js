import React, { useState, useEffect } from 'react'
import { CardPokemon } from '../components/CardPokemon'
import { Loading, ImgContainer } from './ListOfPokemons/styles'
import { SvgPokebolaMini } from '../components/PokebolaMini'

export const PokeCards = ({ id, name }) => {
  const [poke, setPoke] = useState([])
  const [load, setLoad] = useState(true)
  const [error, setError] = useState(false)
  
  useEffect(() => {
    async function fecthPokeData() {
      if (id) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await response.json()
        setPoke(data)
      } else {

        try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
          const data = await response.json()
          setPoke(data)
          setError(false)
          
        } catch (error) {
          setError(true) 
        }
      }
      
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
          :
            !error
              ? (
                <CardPokemon { ...poke } />
            )
            : <p>No se encontró el pokemon</p>
      }
    </>
  )
}
