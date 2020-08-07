import styled from 'styled-components'
import { GrayDark, GrayPrimary, BluePrimary, BlueSecondary, White, Black } from '../../styles/GlobalStyles'

export const Div = styled.div`
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
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