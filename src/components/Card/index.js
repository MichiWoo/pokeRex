import React from 'react'
import { Link, Article, Img, ImgWrapper, Title, Type, TextId, Header, Sidebar, Wrapper } from './styles'
import { SvgPokebola } from '../Pokebola'

export const Card = ({pokemon}) => (
  <Link to={`/detail/${pokemon.id}`}>
    <Article className={pokemon.type1}>
      <Header>
        <TextId className={pokemon.type1}># {pokemon.id}</TextId>
      </Header>
      <Sidebar>
        <Title>{pokemon.name}</Title>
        <Type className={pokemon.type1}>
          <span>{pokemon.type1}</span>
        </Type>
        {
          pokemon.type2
            ? (
              <Type className={pokemon.type1}>
                <span>{pokemon.type2}</span>  
              </Type>
            )
            : null
        }
      </Sidebar>
      <Wrapper>
        <Img src={pokemon.img} />
      </Wrapper>
      <div className='svg-container'>
        <SvgPokebola />
      </div>
    </Article>
  </Link>
)