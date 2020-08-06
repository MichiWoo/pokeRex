import React from 'react'
import { PokeHeader, Nav, Button, ImgPokebola } from "./styles";
import Pokebola from '../../assets/pokebolaC.svg'
 
export const Header =  () => {
  return (
    <PokeHeader>
      <Nav role="menu">
        <section className="nav-left">
          <Button>🐣</Button>
        </section>
        <section className="nav-center" />
        <section className="nav-right">
          <Button>✋</Button>
        </section>
      </Nav>
      <ImgPokebola src={Pokebola} alt="Pokebola" />
    </PokeHeader>
  );
}
