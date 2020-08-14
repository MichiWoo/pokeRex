import React from 'react'
import { PokeHeader, ImgContainer, Title, Subtitle } from "./styles"
import { SvgPokebola } from '../Pokebola'
export const HeaderGray = () => {
  return (
    <PokeHeader className="header">
      <Title>Pokerex</Title>
      <Subtitle>Aplicación para buscar Pokes...</Subtitle>
      <ImgContainer>
        <SvgPokebola />
      </ImgContainer>
    </PokeHeader>
  )
}
