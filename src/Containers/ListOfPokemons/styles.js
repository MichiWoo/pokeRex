import styled from 'styled-components'

export const Container = styled.section`
  width: 90%;
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 10px;
`
export const Item = styled.li`
  padding: 0 8px;
`