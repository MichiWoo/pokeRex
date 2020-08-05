import React from 'react'
import { Button } from './styles'

export const Category = ( { name, path, colorPrimary, colorSecundary }) => {
  return (
    <Button href={path} colorPrimary={colorPrimary} colorSecundary={colorSecundary}>
      <span className="title">{name}</span>
        <span className="elipse1"></span>
        <span className="elipse2"></span>
        <span className="elipse3"></span>
        <span className="rectangulo1"></span>
        <span className="rectangulo2"></span>
    </Button>
  );
}
