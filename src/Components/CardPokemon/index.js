import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Card, ImgContainer } from './styles'
import { navigate } from '@reach/router'
import { SvgPokebola } from '../Pokebola'

const ArrawBack = <FontAwesomeIcon icon={faArrowLeft} />

export const CardPokemon = (pokemon) => {
  const handleClick = () => {
    navigate('/pokedex')
  }

  const classCard = `card_${pokemon.types[0].type.name}`
  const classButtonTop = `card_header_top_button ${pokemon.types[0].type.name}`
  const classButton = `card_header_bottom_item_button ${pokemon.types[0].type.name}`
  const classCardData = `card_data ${pokemon.types[0].type.name}`
  return (
    <Card className={classCard}>
      <div className='card_header'>
        <div className='card_header_top'>
          <button className={classButtonTop} onClick={handleClick}>
            {ArrawBack}
          </button>
        </div>
        <div className='card_header_middle'>
          <div className='card_header_middle_name'>{pokemon.name}</div>
          <div className='card_header_middle_id'># {pokemon.id}</div>
        </div>
        <div className='card_header_bottom'>
          <div className='card_header_bottom_item'>
            <button className={classButton}>{pokemon.types[0].type.name}</button>
            {
              pokemon.types[1] ? <button className={classButton}>{pokemon.types[1].type.name}</button> : null
            }
            
          </div>
          <div className='card_header_bottom_item'>
            <span>{pokemon.types[0].type.name} pokemon</span>
          </div>
        </div>
      </div>
      <div className='card_imagen'>
        <img src={pokemon.sprites.other.dream_world.front_default} />
      </div>
      <div className={classCardData}>
        <div className='card_data_container'>
          <div className='card_data_navbar'>
            <div className='card_data_navbar_item'>Acerca</div>
            <div className='card_data_navbar_item'>Base</div>
            <div className='card_data_navbar_item'>Evolución</div>
            <div className='card_data_navbar_item'>Moves</div>
          </div>
          <div className='card_data_content'>
            <div className='card_data_content_item'>
              <p>Peso: {pokemon.weight}</p>
              <p>Altura: {pokemon.height}</p>
            </div>
          </div>
        </div>
      </div>
      <ImgContainer>
          <SvgPokebola />
      </ImgContainer>
    </Card>
  )
}
