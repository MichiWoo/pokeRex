import React from 'react'
import { useNavigate } from '@reach/router'
import { Button, ButtonTitle, ImgContainerLeft, ImgContainerRight } from './styles'
import { SvgPokebolaMini } from '../PokebolaMini'

export const Category = ({ name, path, color }) => {
  const navigate = useNavigate()
  const handleClick = (e) => {
    e.preventDefault()
    navigate(path)
  }
  const colorClass = `pokebutton ${color}`
  return (
    <Button className={colorClass} onClick={handleClick}>
      <ButtonTitle className='pokebutton-title'>
        {name}
      </ButtonTitle>
      <ImgContainerLeft>
        <SvgPokebolaMini />
      </ImgContainerLeft>
      <ImgContainerRight>
        <SvgPokebolaMini />
      </ImgContainerRight>
    </Button>
  )
}
