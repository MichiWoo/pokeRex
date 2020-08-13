import React from 'react'
import { Layout } from '../Components/Layout'
import { PokeCards } from '../Containers/PokeCards'

export const Detail = ({detailId}) => {
  return (
    <Layout title='PokeRex'>
      <PokeCards id={detailId} />
    </Layout>
  )
}
