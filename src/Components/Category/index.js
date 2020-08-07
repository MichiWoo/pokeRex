import React from 'react'
import { useNavigate } from '@reach/router'
import { Button } from './styles'

export const Category = ({ name, path, colorPrimary, colorSecundary }) => {
  const navigate = useNavigate()
  const handleClick = (e) => {
    e.preventDefault()
    navigate(path)
  }

  return (
    <Button type="button" colorPrimary={colorPrimary} colorSecundary={colorSecundary} onClick={handleClick}>
      {name}

    </Button>
  )
}
