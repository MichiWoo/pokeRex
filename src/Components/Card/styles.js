import styled from 'styled-components'
import { fadeIn } from '../../styles/animations'
import { Link as LinkRouter } from '@reach/router'
import { GreenBack, BlueBack, RedBack, YellowBack, GreenLigth, GrayBack, GreenText, RedText, BlueText, YellowText, GreenLigthText, PurpleText, PurpleBack, GreenButton, RedButton, BlueButton, YellowButton, BrownBack, BrownText, BrownButton, GrayText, GrayButton, PinkBack, PinkText, PinkButton } from '../../styles/GlobalStyles'

export const Link = styled(LinkRouter)`
  text-decoration: none;
`

export const Header = styled.div`
  grid-area: header;
  display: flex;
  justify-content: flex-end;
`
export const Sidebar = styled.div`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`

export const Wrapper = styled.div`
  grid-area: wrapper;
  display: flex;
  justify-content: center;
  align-items: center;
`


export const Article = styled.article`
  min-height: 150px;
  display: grid;
  padding: 20px;  
  border-radius: 30px;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
  "sidebar ....... header"
  "sidebar wrapper wrapper";
  &.grass {
    background-color: ${GreenBack};
  }
  &.fire {
    background-color: ${RedBack};
  }
  &.water {
    background-color: ${BlueBack};
  }
  &.bug {
    background-color: ${GreenLigth};
  }
  &.normal {
    background-color: ${GrayBack};
  }
  &.electric {
    background-color: ${YellowBack};
  }
  &.poison {
    background-color: ${PurpleBack};
  }
  &.ground {
    background-color: ${BrownBack};
  }
  &.fairy {
    background-color: ${PinkBack};
  }
  &:hover {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
    opacity: 1;
  }
`

export const Img = styled.img`
  ${fadeIn()}
  max-width: -webkit-fill-available;
`

export const Title = styled.p`
  margin: 0 0 0 10px;
  font-size: 26px;
  font-weight: 600;
  color: #FFFFFF;
  :first-letter {
    text-transform: capitalize ;
  }
`

export const Type = styled.div`
  margin: 0;
  width: 80%;
  font-size: 14px;
  font-weight: 300;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  padding: 5px 0 5px 0px;
  margin-bottom: 5px;
  & span {
    padding: 0;
    margin-bottom: 5px;
  }
  &.grass {
    background-color: ${GreenButton};
  }
  &.fire {
    background-color: ${RedButton};
  }
  &.water {
    background-color: ${BlueButton};
  }
  &.bug {
    background-color: ${GreenLigthText};
  }
  &.normal {
    background-color: ${GrayButton};
  }
  &.electric {
    background-color: ${YellowButton};
  }
  &.poison {
    background-color: ${PurpleText};
  }
  &.ground {
    background-color: ${BrownButton};
  }
  &.fairy {
    background-color: ${PinkButton};
  }
`

export const TextId = styled.h4`
  margin: 0;
  font-size: 24px;
  color: #3E8570;
  &.grass {
    color: ${GreenText};
  }
  &.fire {
    color: ${RedText};
  }
  &.water {
    color: ${BlueText};
  }
  &.bug {
    color: ${GreenLigthText};
  }
  &.normal {
    color: ${GrayText};
  }
  &.electric {
    color: ${YellowText};
  }
  &.poison {
    color: ${PurpleText};
  }
  &.ground {
    color: ${BrownText};
  }
  &.fairy {
    color: ${PinkText};
  }
  
`