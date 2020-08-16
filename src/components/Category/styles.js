import styled from 'styled-components'
import { fadeIn } from '../../styles/animations'

export const Button = styled.div`
  position: relative;
  width: 20%;
  height: 20px;
  border-radius: 15px;
  padding: 15px 60px 15px 15px;
  margin: 5px 3px;
  cursor: pointer;
  overflow: hidden;
  :hover {
    color: rgba(255, 255, 255, 1) !important;
    box-shadow: 0 4px 16px rgba(22, 222, 145, 0.6);
    transition: all 0.2s ease;
  }
  &.pokebutton.green {
    background-color: #48D0B0;
  }
  &.pokebutton.red {
    background-color: #FA6555;
  }
  &.pokebutton.purple {
    background-color: #9F5BBA;
  }
  &.pokebutton.yellow {
    background-color: #FFCE4B;
  }
  &.pokebutton.blue {
    background-color: #429BED;
  }
`;

export const ButtonTitle = styled.div`
  color: white;
  font-size: 14px;
  font-weight: 600;
`

export const ImgContainerLeft = styled.div`
  position: absolute;
  left: 0;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  bottom: 0;
  width: 25px;
`

export const ImgContainerRight = styled.div`
  position: absolute;
  right: 0;
  bottom: -30px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

`