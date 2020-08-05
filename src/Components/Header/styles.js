  import styled from 'styled-components'


  export const Main = styled.div`
    height: 130px;
    width: 100%;
    margin-bottom: 20px;
    position: relative;
  `

  export const Pokebola = styled.div`
    width: 250px;
    height: 250px;
    position: absolute;
    left: 50%;
    bottom: 10%;
    overflow: hidden;
    hyphens: auto;
    
    .elipse2 {
      position: absolute;
      width: 170px;
      height: 170px;
      left: 5%;
      bottom: 0;
      background: #FFFFFF;
      border-radius: 50%;
      border: 35px solid #F5F5F5;
      box-sizing: border-box;
      opacity: 0.5;
      z-index: 15;
    }
    .elipse3 {
      position: absolute;
      width: 105px;
      height: 105px;
      left: 18%;
      bottom: 13%;
      background: #F5F5F5;
      border-radius: 50%;
      opacity: 1;
      border: 26px solid #FFFFFF;
      box-sizing: border-box;
      z-index: 10;
    }

    .rectangulo1 {
      position: absolute;
      width: 40px;
      height: 20px;
      left: 15%;
      bottom: 29%;
      background: #F5F5F5;
      opacity: 0.4;
      z-index: 15;

    }

    .rectangulo2 {
      position: absolute;
      width: 40px;
      height: 20px;
      left: 48%;
      bottom: 29%;
      background: #F5F5F5;
      opacity: 0.4;
      z-index: 15;
  }
  `