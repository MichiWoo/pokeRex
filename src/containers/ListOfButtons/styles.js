import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`