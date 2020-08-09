import styled from 'styled-components'
import { fadeIn } from '../../styles/animations'
import { Link as LinkRouter } from '@reach/router'
import { GreenBack, BlueBack, RedBack, YellowBack, GreenLigth, GrayBack} from '../../styles/GlobalStyles'

export const Link = styled(LinkRouter)`
  text-decoration: none;
`

export const Article = styled.article`
  min-height: 150px;
  padding: 20px;  
  border-radius: 15px;
  display: flex;
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
`

export const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`
export const Img = styled.img`
  ${fadeIn()}
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2 );
  max-height: 60%;
  object-fit: cover;
  position: absolute;
  top: 0;
`

export const Title = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
`

export const Type = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 300;

`