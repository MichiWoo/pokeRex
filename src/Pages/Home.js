import React from 'react'
import { Header } from '../Components/Header'
import { Container } from '../Components/Container'
import { Main, Title, Answer, Search, StyledInput } from '../styles/styles'

export const Home = () => {
  return (
    <Main>
      <Header />
      <Container>
        <Title>
          <h1>PokeRecx</h1>
          <Answer>
            <h2>
              ¿Cuál es el pokemon que estás buscando?
            </h2>
          </Answer>
          <Search>
            <i className="icon-search"></i>
            <StyledInput type="text" placeholder="Busca por Pokemon, Movimiento, etc." />
          </Search>
        </Title>
      </Container>
    </Main>
  );
}
