import React, { useState, useEffect } from 'react'
import { Card } from '../../components/Card'
import { Container, Button, Loading, ImgContainer } from './styles'
import { SvgPokebolaMini } from '../../components/PokebolaMini'

export const ListOfPokemons = () => {
  
  const [result, setResult] = useState([])
  const [poke, setPoke] = useState([])
  const [load, setLoad] = useState('true')
  const [limit, setLimit] = useState(20)
  const [offset, setOffset] = useState(0)
  const arr = []
  
  useEffect(() => {
    async function fecthPokeData() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
      const data = await response.json()
      setResult(data)
      data.results.map((item) => {
        fetch(item.url)
          .then((response) => response.json())
          .then((poke) => {
            let myObj = {
              id: parseInt(poke.id),
              name: poke.name,
              img: poke.sprites.other.dream_world.front_default,
              type1: poke.types[0].type.name,
              type2: poke.types[1] ? poke.types[1].type.name : ''
            }
            arr.push(myObj)
          })
        setPoke(arr)
      })
    }
    fecthPokeData()
    setTimeout(() => {
      setLoad(false)
    }, 1500)
  },[])
  
  const handleNext = async () => {
    setLoad(true)
    let _offset = offset + 20
    setOffset(_offset)
    const link = `https://pokeapi.co/api/v2/pokemon?offset=${_offset}&limit=${limit}`
    console.log(link)
    const response = await fetch(link)
    const data = await response.json()
    setResult(data)
    data.results.map((item) => {
      fetch(item.url)
        .then((response) => response.json())
        .then((poke) => {
          let myObj = {
            id: parseInt(poke.id),
            name: poke.name,
            img: poke.sprites.other.dream_world.front_default,
            type1: poke.types[0].type.name,
            type2: poke.types[1] ? poke.types[1].type.name : ''
          }
          arr.push(myObj)
        })
      setPoke(arr)
      setTimeout(() => {
        setLoad(false)
      }, 1500)
    })
  }

  const handlePrevious = async () => {
    setLoad(true)
    let _offset = offset - 20
    _offset < 0 ? 0 : _offset
    setOffset(_offset)
    const link = `https://pokeapi.co/api/v2/pokemon?offset=${_offset}&limit=${limit}`
    console.log(link)
    const response = await fetch(link)
    const data = await response.json()
    setResult(data)
    data.results.map((item) => {
      fetch(item.url)
        .then((response) => response.json())
        .then((poke) => {
          let myObj = {
            id: parseInt(poke.id),
            name: poke.name,
            img: poke.sprites.other.dream_world.front_default,
            type1: poke.types[0].type.name,
            type2: poke.types[1] ? poke.types[1].type.name : ''
          }
          arr.push(myObj)
        })
      setPoke(arr)
      setTimeout(() => {
        setLoad(false)
      }, 1500)
    })
  }

  return (
    <Container>
      {
        load
          ?
          ( 
            <Loading>
              <span>Loading...</span>
              <ImgContainer>
                <SvgPokebolaMini/>
            </ImgContainer>
            </Loading>
          )
          :
          (
            <>
              {
                poke.map((pokemon, i) => (
                    <Card key={i} pokemon={pokemon} />
                ))
              }
              {
                offset > 0 ? <Button onClick={handlePrevious}>Atrás</Button> : null
              }
              <Button onClick={handleNext}>Siguiente</Button>
            </>
          )
      }
    </Container>
  )
}
