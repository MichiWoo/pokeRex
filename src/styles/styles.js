import styled from 'styled-components'

export const colorPrimary = '#4FC1A6'
export const colorSecondary = '#4FC1A6'
export const colorGrayPrimary = '#F5F5F5'
export const colorGrayDark = '#726a95'
export const colorWhite = '#FFFFFF'
export const colorBlack = '#000000'
export const colorBeidge = '#f7f7ee'

export const Main = styled.main`
  width: 90%;
  margin: 20px auto;
`
export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2vw;
  color: #726a95;
  font-size: 60px;
  margin: 0;
  font-weight: normal;
  h2 {
    color: gray;
    font-weight: lighter;
    margin: 0;
    font-size: 40px;
    margin-bottom: 30px;
  }
`

export const Answer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.5vw;
  color: gray;
  font-weight: lighter;
  margin: 0;
`

export const StyledInput = styled.input`
  width: 30vw;
  font-size: 1.3rem;
  border: none;
  background-color: ${colorBeidge};
  color: ${colorGrayDark}
`;

export const Search = styled.div`
  width: 30vw;
  background-color: ${colorBeidge};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1vh 0 1vh 0.5vw;
  border-radius: 15px;
  
  ${StyledInput}:focus {
    outline: none;
  }
  i {
    font-size: 1.3rem;
    margin: 0 0.5vw;
  }
`