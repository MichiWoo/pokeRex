import styled from 'styled-components'
import { Black, GrayPrimary, GrayDark, White } from '../../styles/GlobalStyles'
import { Link as LinkRouter } from '@reach/router'

export const Link = styled(LinkRouter)`
  text-decoration: none;
`


export const PokeHeader = styled.section`
  width: 100%;
  margin-bottom: 20px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 600px) {
    margin: 0 auto;
    max-width: 95vw;
  }
`


export const ImgContainer = styled.div`
  position: absolute;
  right: -3%;
  top: -75%;
  @media only screen and (max-width: 600px) {
    right: -10%;
    top: -45%;  
  }
`

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
  color: ${GrayDark};
  padding-bottom: 8px;
  align-items: center;
  @media only screen and (max-width: 600px) {
    margin-top: 60px;
    max-width: 95vw;
    font-size: 40px;
  }
`

export const Subtitle = styled.h3`
  font-size: 20px;
  font-weight: 400;
  color: ${GrayDark};
  padding-bottom: 8px;
  align-items: center;
`