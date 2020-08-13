import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Card } from './styles'

const ArrawBack = <FontAwesomeIcon icon={faArrowLeft} />

export const CardPokemon = (pokemon) => {
  console.log(pokemon)
  return (
    <Card>
      <div className='card_header'>
        <div className='card_header_top'>
          <button className='card_header_top_button'>
            {ArrawBack}
          </button>
        </div>
        <div className='card_header_middle'>
          <div className='card_header_middle_name'>{pokemon.name}</div>
          <div className='card_header_middle_id'>{pokemon.id}</div>
        </div>
        <div className='card_header_bottom'>
          <div className='card_header_bottom_item'>
            <button className='card_header_bottom_item_button'>{pokemon.types[0].type.name}</button>
            {
              pokemon.types[1] ? <button className='card_header_bottom_item_button'>{pokemon.types[1].type.name}</button> : null
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
      <div className='card_data'>
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
    </Card>
  )
}
