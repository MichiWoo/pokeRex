import React, { useState, useEffect } from 'react'
import { CardPokemon } from '../components/CardPokemon'
import { Loading, ImgContainer } from './ListOfPokemons/styles'
import { SvgPokebolaMini } from '../components/PokebolaMini'

export const PokeCards = ({ id, name, onError }) => {
  const [poke, setPoke] = useState([])
  const [load, setLoad] = useState(true)
  const [error, setError] = useState(false)
  
  useEffect(() => {
    async function fecthPokeData() {
      if (id) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await response.json()
        onError({ error: false })
        setPoke(data)
      } else {
        console.log(name)
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        if (response.status !== 404) {
          const data = await response.json()
          setPoke(data)
          onError({ error: false })
        } else {
          setError(true)
          onError({ error: true })
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
            error 
              ? (
                  <p>Error</p>
                )
              : (
                <CardPokemon { ...poke } />
                )
      }
    </>
  )
}
