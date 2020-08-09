import styled from 'styled-components'
import { GrayDark, GrayPrimary, BluePrimary, BlueSecondary, White, Black} from '../../styles/GlobalStyles'

export const Foot = styled.footer`
  width: 100%;
  margin: 40px auto 30px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Span = styled.span`
  color: ${GrayDark};
  font-weight: 600;
  font-size: 20px;
`

export const Text = styled.p`
  color: ${GrayDark};
  font-weight: 600;
  font-size: 20px;
`

export const Link = styled.a`
  text-decoration: none;
  color: ${BluePrimary};
  font-weight: 600;
  font-size: 20px;
`

export const Social = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const ButtonLink = styled.a`
  margin-left: 20px;
  margin-right: 20px;
  align-items: center;
  padding: 5px 10px 5px 10px;
  border-radius: 50%;
  text-decoration: none;
  background-color: ${GrayDark};
  font-size: 24px;
  color: ${GrayPrimary};
  :hover {
    background-color: ${Black};
    color: ${White};
  }
`