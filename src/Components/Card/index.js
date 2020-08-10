import React from 'react'
import { Link, Article, Img, ImgWrapper, Title, Type, TextId, Header, Sidebar, Wrapper } from './styles'

export const Card = ({pokemon}) => (
  <Link to={`/pokemon/${pokemon.id}`}>
    <Article className={pokemon.type1}>
      <Header>
        <TextId className={pokemon.type1}>#{pokemon.id}</TextId>
      </Header>
      <Sidebar>
        <Title>{pokemon.name}</Title>
        <Type className={pokemon.type1}>
          <span>{pokemon.type1}</span>
        </Type>
        <Type className={pokemon.type2}>
          <span>{pokemon.type2}</span>  
        </Type>
      </Sidebar>
      <Wrapper>
        <Img src={pokemon.img} />
      </Wrapper>
    </Article>
  </Link>
)