import React, { useState, useEffect } from 'react'
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
  const [dataSpecie, setDataSpecie] = useState([])
  const [dataEvolution, setDataEvolution] = useState([])

  const arraySpecie = []
  useEffect(() => {
    async function fetchDataSpecie() {
      const responseSpecie = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`)
      const dataSpecie = await responseSpecie.json()
      let specieObj = {
        specie: dataSpecie.genera[7].genus,
        description: dataSpecie.flavor_text_entries[6].flavor_text,
        legendary: dataSpecie.is_legendary,
        baby: dataSpecie.is_baby,
        mythical: dataSpecie.is_mythical,
        generation: dataSpecie.generation.name,
        eggsGroups1: dataSpecie.egg_groups[0].name,
        eggsGroups2: dataSpecie.egg_groups[1] ? dataSpecie.egg_groups[1].name : null
      }
      setDataSpecie(specieObj)
    }
    fetchDataSpecie()
  }, [])


  useEffect(() => {
    async function fetchDataEvolution() {
      const responseEvolution = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${pokemon.id}`)
      const dataEvolution = await responseEvolution.json()
      console.log(dataEvolution)
      setDataEvolution(dataEvolution)
    }
    fetchDataEvolution()
  }, [])

  

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
            <span>{dataSpecie.specie}</span>
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
                      <div className='card_data_content_item_about_container_top'>
                        <div className='card_data_content_item_about_container_top_title'>
                          {dataSpecie.description}
                        </div>
                      </div>
                      <div className='card_data_content_item_about_container_medium'>
                        <div className='card_data_content_item_about_container_medium_item'>
                          <p className='card_data_content_item_about_container_medium_item_title'>Peso</p>
                          <p className='card_data_content_item_about_container_medium_item_data'>
                            {pokemon.weight / 10} Kgrs.
                          </p>
                        </div>
                        <div className='card_data_content_item_about_container_medium_item'>
                          <p className='card_data_content_item_about_container_medium_item_title'>Altura</p>
                          <p className='card_data_content_item_about_container_medium_item_data'>
                            {pokemon.height * 10} cms.
                          </p>
                        </div>
                      </div>
                      <div className='card_data_content_item_about_container_bottom'>
                        <div className='card_data_content_item_about_container_bottom_title'>
                          <span>Breeding</span>
                        </div>
                        <div className='card_data_content_item_about_container_bottom_grid'>
                          <div className='card_data_content_item_about_container_bottom_grid_item'>
                            <div className='card_data_content_item_about_container_bottom_grid_item_title'>
                              Egg Groups
                            </div>
                            <div className='card_data_content_item_about_container_bottom_grid_item_data'>
                              {dataSpecie.eggsGroups1}
                            </div>
                          </div>
                          <div className='card_data_content_item_about_container_bottom_grid_item'>
                            <div className='card_data_content_item_about_container_bottom_grid_item_title'>
                              Egg Cycle
                            </div>
                            <div className='card_data_content_item_about_container_bottom_grid_item_data'>
                              {dataSpecie.eggsGroups2}
                            </div>
                          </div>
                          <div className='card_data_content_item_about_container_bottom_grid_item'>
                            <div className='card_data_content_item_about_container_bottom_grid_item_title'>
                              Base Experience
                            </div>
                            <div className='card_data_content_item_about_container_bottom_grid_item_data'>
                              {pokemon.base_experience}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                  : null
              }
              {
                tabActive === 2
                  ? (
                    <div className='card_data_content_item_base_container'>
                      <div className='card_data_content_item_base_container_stats'>
                        {
                          pokemon.stats.map((stats, index) => {
                            return (
                              <div className='card_data_content_item_base_stats_item' key={index}>
                                <div className='card_data_content_item_base_stats_item_title'>
                                  {stats.stat.name}
                                </div>
                                <div className='card_data_content_item_base_stats_item_data'>
                                  {stats.base_stat}
                                </div>
                                <div className='card_data_content_item_base_stats_item_line'>
                                  <progress className='card_data_content_item_base_stats_item_line_progress' max='100' value={stats.base_stat}></progress>
                                </div>
                              </div>
                            )
                          })
                        }
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
