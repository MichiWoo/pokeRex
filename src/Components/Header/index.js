import React from 'react'
import { PokeHeader, ImgPokebola, Title } from "./styles"
import Pokebola from '../../assets/pokebolaC.svg'

export const Header = () => {
  return (
    <PokeHeader className="header">
      <Title>Pokerex</Title>
      <ImgPokebola className='header_img'src={Pokebola} alt="Pokebola" />
    </PokeHeader>
  )
}
