import React from 'react'
import { useInputValue } from '../../hooks/UseInputValue'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Div, Input, Button } from './styles'

const iconSearch = <FontAwesomeIcon icon={faSearch} />

export const Search = ({ onSubmit, onChange }) => {
  const textPoke = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ textPoke: textPoke.value })
  }

  const handleOnChange = (e) => {
    e.preventDefault()
    e.target.value
    onChange({ textPoke: e.target.value })
  }

  return (
    <Div>
      <form onSubmit={handleSubmit} onChange={handleOnChange}>
        <Input name='poke' type='text' placeholder='Busca un pokemon...' {...textPoke} />
        <Button>{iconSearch}</Button>
      </form>
    </Div>
  )
}
