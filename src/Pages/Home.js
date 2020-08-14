import React from 'react'
import { Layout } from '../Components/Layout'
import { ListOfButtons } from '../Containers/ListOfButtons'
import { HeaderGray } from '../Components/HeaderGray'

export const Home = () => {
  return (
    <Layout title='PokeRex' subtitle='Aplicación para buscar tus pokes favoritos...'>
      <HeaderGray />
      <ListOfButtons />
   </Layout> 
  )
}
