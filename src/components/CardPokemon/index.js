import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Card, ImgContainer } from './styles'
import { navigate } from '@reach/router'
import { SvgPokebola } from '../Pokebola'

const ArrawBack = <FontAwesomeIcon icon={faArrowLeft} />

export const CardPokemon = (pokemon) => {
  const [activeAbout, setActiveAbout] = useState('active')
  const [activeBase, setActiveBase] = useState('')
  const [activeEvolution, setActiveEvolution] = useState('')
  const [activeMovs, setActiveMovs] = useState('')
  const [tabActive, setTabActive] = useState(1)

  const handleClick = () => {
    navigate('/pokedex')
  }

  const classCard = `card_${pokemon.types[0].type.name}`
  const classButtonTop = `card_header_top_button ${pokemon.types[0].type.name}`
  const classButton = `card_header_bottom_item_button ${pokemon.types[0].type.name}`
  const classCardData = `card_data ${pokemon.types[0].type.name}`

  const handleClickTabs = (event) => {
    const tab = parseInt(event.target.dataset.number)
    setActiveAbout('')
    setActiveBase('')
    setActiveEvolution('')
    setActiveMovs('')

    switch (tab) {
      case 1:
        setActiveAbout('active')
        setTabActive(1)
        break
      case 2:
        setActiveBase('active')
        setTabActive(2)
      break
      case 3:
        setActiveEvolution('active')
        setTabActive(3)
        break
      case 4:
        setActiveMovs('active')
        setTabActive(4)
        break
    }
  }

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
            <div data-number='1'className={`card_data_navbar_item ${activeAbout}`} onClick={handleClickTabs}>Acerca</div>
            <div data-number='2'className={`card_data_navbar_item ${activeBase}`} onClick={handleClickTabs}>Base</div>
            <div data-number='3'className={`card_data_navbar_item ${activeEvolution}`} onClick={handleClickTabs}>Evolución</div>
            <div data-number='4'className={`card_data_navbar_item ${activeMovs}`} onClick={handleClickTabs}>Moves</div>
          </div>
          <div className='card_data_content'>
            <div className='card_data_content_item'>
              {
                tabActive === 1
                  ? (
                    <div className='card_data_content_item_about_container'>
                      <div className='card_data_content_item_about_container_item'>
                        <p className='card_data_content_item_about_container_item_title'>Peso</p>
                        <p className='card_data_content_item_about_container_item_data'>
                          {pokemon.weight / 10} Kgrs.
                        </p>
                      </div>
                      <div className='card_data_content_item_about_container_item'>
                        <p className='card_data_content_item_about_container_item_title'>Altura</p>
                        <p className='card_data_content_item_about_container_item_data'>
                          {pokemon.height * 10} cms.
                        </p>
                      </div>
                    </div>
                  )
                  : null
              }
              {
                tabActive === 2
                  ? (
                    <div className='card_data_content_item_base_container'>
                      <div className='card_data_content_item_base_item'>
                        <div className='card_data_content_item_base_item_table'>
                          HP 45 
                          ATTACK 60
                          DEFENSE 48
                        </div>
                      </div>
                      <div className='card_data_content_item_base_item'>
                        <div className='card_data_content_item_base_item_footer'>
                          Type defenses
                        </div>
                      </div>
                    </div>
                    )
                  : null
              }
              {
                tabActive === 3
                  ? (
                    <div className='card_data_content_item_evolution_container'>
                      Evolution
                    </div>
                    )
                  : null
              }
              {
                tabActive === 4
                  ? (
                    <div className='card_data_content_item_movs_container'>
                      Movs
                    </div>
                    )
                  : null
              }
              
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
