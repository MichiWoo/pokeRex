import React, { useState, useEffect } from 'react'
import { navigate } from '@reach/router'
import { Tab, Tabs, Content } from '../Tab'
import { ProgressBar } from '../ProgressBar'
import { Card, ImgContainer } from './styles'
import { SvgPokebola } from '../Pokebola'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

const ArrawBack = <FontAwesomeIcon icon={faArrowLeft} />
const LongArrowAltRight = <FontAwesomeIcon icon={faLongArrowAltRight} />

export const CardPokemon = (pokemon) => {
  const [active, setActive] = useState(0)
  const [dataSpecie, setDataSpecie] = useState([])
  const [dataEvolution, setDataEvolution] = useState([])
  console.log('Here 🐤')
  console.log(pokemon)
  useEffect(() => {

    async function fetchDataSpecie() {
      console.log('Here 🐤🐤🐤')
      const responseSpecie = await fetch(pokemon.species.url)
      const dataSpecie = await responseSpecie.json()
      console.log(dataSpecie.evolution_chain.url)
      let specieObj = {
        specie: dataSpecie.genera[7].genus,
        description: dataSpecie.flavor_text_entries[6].flavor_text,
        legendary: dataSpecie.is_legendary,
        baby: dataSpecie.is_baby,
        mythical: dataSpecie.is_mythical,
        generation: dataSpecie.generation.name,
        eggsGroups1: dataSpecie.egg_groups[0].name,
        eggsGroups2: dataSpecie.egg_groups[1] ? dataSpecie.egg_groups[1].name : null,
        evolution: dataSpecie.evolution_chain.url
      }
      console.log('Here 🐤🐤🐤🐤')
      setDataSpecie(specieObj)
      fetchDataEvolution(specieObj.evolution)
    }

    async function fetchDataEvolution(url) {
      console.log('Here 🐤🐤🐤🐤🐤')
      console.log(dataSpecie)
      const responseEvolution = await fetch(url)
      const dataEvol = await responseEvolution.json()
      console.log(dataEvol)
      setDataEvolution(dataEvol)
    }
    console.log('Here 🐤🐤')
    fetchDataSpecie()
  }, [])

  const handleClick = () => {
    navigate('/')
  }

  const classCard = `card_${pokemon.types[0].type.name}`
  const classButtonTop = `card_header_top_button ${pokemon.types[0].type.name}`
  const classButton = `card_header_bottom_item_button ${pokemon.types[0].type.name}`
  const classCardData = `card_data ${pokemon.types[0].type.name}`

  const handleClickTabs = e => {
    const index = parseInt(e.target.id, 0)
    if (index !== active) {
      setActive(index)
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
            <Tabs>
              <Tab onClick={handleClickTabs} active={active === 0} id={0}>
                Acerca
              </Tab>

              <Tab onClick={handleClickTabs} active={active === 1} id={1}>
                Base
              </Tab>

              <Tab onClick={handleClickTabs} active={active === 2} id={2}>
                Evolución
              </Tab>

              <Tab onClick={handleClickTabs} active={active === 3} id={3}>
                Movs.
              </Tab>

            </Tabs>
          </div>
          <div className='card_data_content'>
            <div className='card_data_content_item'>
              <Content active={active === 0}>
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
              </Content>
              <Content active={active === 1}>
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
                              <ProgressBar width={stats.base_stat} />
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </Content>
              <Content active={active === 2}>
                <div className='card_data_content_item_evolution_container'>
                  <div className='card_data_content_item_evolution_container_title'>
                    <span>Evolution Chain</span>
                  </div>
                  <div className='card_data_content_item_evolution_container_evolutions'>
                    <div className='card_data_content_item_evolution_container_evolutions_row'>
                      <div className='card_data_content_item_evolution_container_evolutions_row_poke1'>
                        <div className='card_data_content_item_evolution_container_evolutions_row_poke1_name'>
                          <span>{dataEvolution.chain? dataEvolution.chain.species.name : ''}</span>
                        </div>
                        <div className='card_data_content_item_evolution_container_evolutions_row_poke1_img'></div>
                      </div>
                      <div className='card_data_content_item_evolution_container_evolutions_row_poketo'>
                        <div className='card_data_content_item_evolution_container_evolutions_row_poketo_icon'>
                          {LongArrowAltRight}
                        </div>
                        <span>{dataEvolution.chain? dataEvolution.chain.evolves_to[0].evolution_details[0].min_level : ''}</span>
                      </div>
                      <div className='card_data_content_item_evolution_container_evolutions_row_poke2'>
                        <div className='card_data_content_item_evolution_container_evolutions_row_poke2_name'>
                          <span>{dataEvolution.chain? dataEvolution.chain.evolves_to[0].species.name : ''}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Content>
              <Content active={active === 3}>
                <div className='card_data_content_item_movs_container'>
                  Movs
                </div>
              </Content>
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
