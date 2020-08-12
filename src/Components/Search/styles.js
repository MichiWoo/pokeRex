import styled from 'styled-components'
import { GrayDark, GrayPrimary, BluePrimary, BlueSecondary, White, Black } from '../../styles/GlobalStyles'

export const Div = styled.div`
  padding: 0 0 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 100px;
`

export const Input = styled.input`
  border-color: transparent;
  border-radius: 15px;
  background-color: ${GrayPrimary};
  padding: 15px;
  font-size: 16px;
  font-weight: 400;
  color: ${GrayDark};
  :focus {
    font-weight: 600;
    outline: none;
  }
`

export const Button = styled.button`
  border-color: transparent;
  border-radius: 15px;
  background-color: ${GrayPrimary};
  padding: 15px;
  height: 50px;
`