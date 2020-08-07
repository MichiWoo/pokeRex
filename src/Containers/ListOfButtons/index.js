import React from 'react'
import { Category} from '../../Components/Category'
import { Section } from './styles'
import { GreenPrimary, GreenSecondary, BluePrimary, BlueSecondary, YellowPrimary, YellowSecondary, RedPrimary, RedSecondary, PurplePrimary, PurpleSecondary } from '../../styles/GlobalStyles'

export const ListOfButtons = () => {
  return (
    <Section>
      <Category name='Pokedex' path='/pokedex' colorPrimary={GreenPrimary} colorSecundary={GreenSecondary} />
      <Category name='Locaciones' path='/locaciones' colorPrimary={PurplePrimary} colorSecundary={PurpleSecondary} />
      <Category name='Movimientos' path='/movimientos' colorPrimary={RedPrimary} colorSecundary={RedSecondary} />
      <Category name='Items' path='/items' colorPrimary={YellowPrimary} colorSecundary={YellowSecondary} />
      <Category name='Habilidades' path='/habilidades' colorPrimary={BluePrimary} colorSecundary={BlueSecondary}/>
    </Section>
  )
}
