import styled from 'styled-components'
import { PurplePrimary, PurpleBack } from '../../styles/GlobalStyles'

export const Container = styled.section`
  width: 90%;
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 10px;
`

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
  background-color: ${PurpleBack};
  border: 1px solid ${PurplePrimary};
  -webkit-box-shadow: 1px 4px 5px 0px ${PurplePrimary};
  -moz-box-shadow: 1px 4px 5px 0px ${PurplePrimary};
  box-shadow: 1px 4px 5px 0px ${PurplePrimary};
  text-decoration: none;
`

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  span {
    color: ${PurpleBack};
  }
`

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;  
`