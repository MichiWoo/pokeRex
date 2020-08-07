import styled from 'styled-components'
import { fadeIn } from '../../styles/animations'

export const Button = styled.button`
  border-radius: 15px;
  color: #fff;
  height: 32px;
  display: block;
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 15px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 15px 30px 30px 30px;
  background-color: ${props => props.colorPrimary};
  border: 1px solid ${props => props.colorPrimary};
  -webkit-box-shadow: 1px 4px 5px 0px ${props => props.colorSecundary};
  -moz-box-shadow: 1px 4px 5px 0px ${props => props.colorSecundary};
  box-shadow: 1px 4px 5px 0px ${props => props.colorSecundary};
  text-decoration: none;
  &[disabled] {
    opacity: .3;
  }
  :hover {
    background-color: ${props => props.colorSecundary};
    border: 1px solid ${props => props.colorSecundary};
  }
  &[aria-current] {
    color: #000;
    &:after {
      ${fadeIn({ time: '0.5s' })}
      content: '.';
      position: absolute;
      bottom: 5px;
      font-size: 34px;
      line-height: 20px;
    }
  }
`;