import React from 'react'
import { PokeHeader, ImgContainer, Title, Subtitle, Link } from "./styles"
import { SvgPokebola } from '../Pokebola'
export const HeaderGray = () => {
  return (
    <PokeHeader className="header">
      <Link to='/'>
        <Title>Pokerex</Title>
      </Link>
      <Subtitle>Aplicación para buscar Pokes...</Subtitle>
      <ImgContainer>
        <SvgPokebola />
      </ImgContainer>
    </PokeHeader>
  )
}
