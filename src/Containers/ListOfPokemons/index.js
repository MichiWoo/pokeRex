import React, { useState, useEffect } from 'react'
import { Card } from '../../Components/Card'
import { Container, Item } from './styles'

export const  ListOfPokemons = () => {
  const [result, setResult] = React.useState([])
  const [poke, setPoke] = React.useState([])
  const [load, setLoad] = React.useState('true')
  const arr = []
  
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=50')
      .then((response) => response.json())
      .then((data) => setResult(
        data.results.map((item) => {
          fetch(item.url)
            .then((response) => response.json())
            .then((poke) => {
              let myObj = {
                id: poke.id,
                name: poke.name,
                img: poke.sprites.other.dream_world.front_default,
                type1: poke.types[0].type.name,
                type2: poke.types[1] ? poke.types[0].type.name : ''
              }
              arr.push(myObj)
            })
          setPoke(arr)
        }),
      ))
    }, [])
    setTimeout(() => {
      setLoad(false)
    }, 1000)
  return (
    <Container>
      {
        load
          ?
          ( 
            <p>Loading...</p>
          )
          :
          (
            poke.map((pokemon, i) => (
              <Card key={i} pokemon={pokemon}/>
            ))
          )
      }
    </Container>
  )
}
