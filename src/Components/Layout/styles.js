import styled from 'styled-components'
import { Black, GrayDark, White, GrayPrimary } from '../../styles/GlobalStyles'

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap; 
  @media only screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
  }
`


export const Subtitle = styled.h2`
  font-size: 20px;
  font-weight: 400;
  color: ${Black};
  padding-bottom: 4px;
  align-items: center;
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