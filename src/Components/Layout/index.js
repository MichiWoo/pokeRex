import React from 'react'
import { Helmet } from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faHamburger} from '@fortawesome/free-solid-svg-icons'
import { Div, Title, Subtitle, Nav, Button } from './styles'
import { navigate } from '@reach/router'

const ArrawBack = <FontAwesomeIcon icon={faArrowLeft} />
const Burger = <FontAwesomeIcon icon={faHamburger} />

export const Layout = ({ children, title, subtitle }) => {
  
  const handleBack = () => {
    navigate(`/`)
  }

  return (
    <>
      <Helmet>
        {title && <title>{title} | PokeRex </title>}
        {subtitle && <meta name='description' content={subtitle} />}
      </Helmet>
      <Nav role="menu">
        <section className="nav-left">
          <Button onClick={handleBack}>{ArrawBack}</Button>
        </section>
        <section className="nav-center" />
        <section className="nav-right">
          <Button>{Burger}</Button>
        </section>
      </Nav>
      <Div>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        {children}
      </Div>
    </>
  )
}
