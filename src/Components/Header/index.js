import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faHamburger} from '@fortawesome/free-solid-svg-icons'
import { PokeHeader, Nav, Button, ImgPokebola } from "./styles"
import Pokebola from '../../assets/pokebolaC.svg'

const ArrawBack = <FontAwesomeIcon icon={faArrowLeft} />
const Burger = <FontAwesomeIcon icon={faHamburger} />

export const Header = () => {
  return (
    <PokeHeader>
      <Nav role="menu">
        <section className="nav-left">
          <Button>{ArrawBack}</Button>
        </section>
        <section className="nav-center" />
        <section className="nav-right">
          <Button>{Burger}</Button>
        </section>
      </Nav>
      <ImgPokebola src={Pokebola} alt="Pokebola" />
    </PokeHeader>
  );
}
