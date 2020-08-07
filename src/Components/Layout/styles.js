import styled from 'styled-components'
import { GrayDark, GrayPrimary, Black } from '../../styles/GlobalStyles'

export const Div = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap; 
`

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
  color: ${GrayDark};
  padding-bottom: 8px;
  align-items: center;
`
export const Subtitle = styled.h2`
  font-size: 20px;
  font-weight: 400;
  color: ${Black};
  padding-bottom: 4px;
  align-items: center;
`