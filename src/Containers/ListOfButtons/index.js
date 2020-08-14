import React from 'react'
import { Category} from '../../Components/Category'
import { Section } from './styles'

export const ListOfButtons = () => {
  return (
    <Section>
      <Category name='Pokedex' path='/pokedex' color='green' />
      <Category name='Locaciones' path='/locaciones' color='purple' />
      <Category name='Movimientos' path='/movimientos' color='red' />
      <Category name='Items' path='/items' color='yellow' />
      <Category name='Habilidades' path='/habilidades' color='blue' />
    </Section>
  )
}
