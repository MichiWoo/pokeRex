import React from 'react'
import { Layout } from '../components/Layout'
import { PokeCards } from '../containers/PokeCards'

export const Detail = ({detailId}) => {
  return (
    <Layout title='PokeRex'>
      <PokeCards id={detailId} />
    </Layout>
  )
}
