import styled from 'styled-components'
import { Black, GrayPrimary, White } from '../../styles/GlobalStyles'


export const PokeHeader = styled.section`
  height: 130px;
  width: 100%;
  margin-bottom: 20px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: hidden;
`

export const Nav = styled.nav`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 8fr 1fr;

  .nav-left {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .nav-right {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  `
export const ImgPokebola = styled.img`
  position: absolute;
  right: -3%;
  top: -75%;
`

export const Button = styled.button`
  padding: .575rem .575rem;
  border: 1px solid ${GrayPrimary};
  background-color: ${GrayPrimary};
  border-radius: 50%;
  color: ${Black};
  transition: color .15s ease-in-out, background-color .15s ease-in-out;
  z-index: 10;
  &:hover {
    color: ${White};
    background-color: ${Black};
  }
`