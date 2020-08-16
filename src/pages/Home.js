import React from 'react'
import { Layout } from '../components/Layout'
import { ListOfButtons } from '../containers/ListOfButtons'
import { HeaderGray } from '../components/HeaderGray'

export const Home = () => {
  return (
    <Layout title='PokeRex' subtitle='Aplicación para buscar tus pokes favoritos...'>
      <HeaderGray />
      <ListOfButtons />
   </Layout> 
  )
}
