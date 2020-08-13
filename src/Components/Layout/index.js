import React from 'react'
import { Helmet } from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faHamburger} from '@fortawesome/free-solid-svg-icons'
import { Div, Subtitle, Nav, Button } from './styles'

const ArrawBack = <FontAwesomeIcon icon={faArrowLeft} />
const Burger = <FontAwesomeIcon icon={faHamburger} />

export const Layout = ({ children, title, subtitle }) => {
  
  return (
    <>
      <Helmet>
        {title && <title>{title} | PokeRex </title>}
        {subtitle && <meta name='description' content={subtitle} />}
      </Helmet>
      <Div>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {children}
      </Div>
    </>
  )
}
