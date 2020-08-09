import React from 'react'
import { Link, Article, Img, ImgWrapper, Title, Type } from './styles'

export const Card = ({pokemon}) => (
  <Link to={`/pokemon/${pokemon.id}`}>
    <Article className={pokemon.type1}>
      <ImgWrapper>
        <Img src={pokemon.img} />
      </ImgWrapper>
      <br />
      <Title>{pokemon.name}</Title>
      <Type>{pokemon.type1}</Type>
      <Type>{pokemon.type2}</Type>
    </Article>
  </Link>
)