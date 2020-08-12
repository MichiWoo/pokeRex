import React from 'react'
import { PokeHeader, ImgPokebola } from "./styles"
import Pokebola from '../../assets/pokebolaC.svg'

export const Header = () => {
  return (
    <PokeHeader className="header">
      <ImgPokebola className='header_img'src={Pokebola} alt="Pokebola" />
    </PokeHeader>
  )
}
