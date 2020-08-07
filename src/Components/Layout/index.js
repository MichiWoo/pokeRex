import React from 'react'
import { Helmet } from 'react-helmet'
import { Div, Title, Subtitle } from './styles'

export const Layout = ({children, title, subtitle}) => {
  return (
    <>
      <Helmet>
        {title && <title>{title} | PokeRex </title>}
        {subtitle && <meta name='description' content={subtitle} />}
      </Helmet>
      <Div>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        {children}
      </Div>
    </>
  )
}
