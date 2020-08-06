import React from 'react'
import { Button } from './styles'

export const Category = ( { name, path, colorPrimary, colorSecundary }) => {
  return (
    <Button href={path} colorPrimary={colorPrimary} colorSecundary={colorSecundary}>
      {name}
    </Button>
  );
}
