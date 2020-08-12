import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Div, Input, Button } from './styles'

const iconSearch = <FontAwesomeIcon icon={faSearch} />

export const Search = () => {
  const handleClick = (e) => {
    e.preventDefault()
    console.log(e.target.name)
  }
  return (
    <Div>
      <form onSubmit={handleClick}>
        <Input name='poke' type='text' placeholder='Busca un pokemon...' />
        <Button>{iconSearch}</Button>
      </form>
    </Div>
  )
}
