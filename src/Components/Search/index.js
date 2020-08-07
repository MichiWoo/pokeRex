import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Div, Input } from './styles'

const iconSearch = <FontAwesomeIcon icon={faSearch} />

export const Search = () => {
  return (
    <Div>
      <Input type='text' placeholder='Busca un pokemon...' />
      {iconSearch}
    </Div>
  )
}
