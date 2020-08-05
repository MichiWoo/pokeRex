import styled from 'styled-components'


export const Button = styled.a`
  width: 5rem;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  display: flex;
  background-color: ${props => props.colorPrimary};
  border-radius: 15px;
  overflow: hidden;
  hyphens: auto;
  min-height: 2.75rem;
  border: 1px solid ${props => props.colorPrimary};
  -webkit-box-shadow: 1px 4px 5px 0px rgba(79,193,166,0.75);
  -moz-box-shadow: 1px 4px 5px 0px rgba(79,193,166,0.75);
  box-shadow: 1px 4px 5px 0px rgba(79,193,166,0.75);
  align-items: center;
  justify-content: center;
  padding: 0px 1rem;
  font-size: 14px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;
  line-height: 14px;
  color: #FFFFFF;
  .title {
    font-size: 16px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-weight: bold;
    line-height: 14px;
    display: flex;
    color: #FFFFFF;
    z-index: 25;
  }

  .elipse1 {
  width: 62px;
  height: 62px;
  position: absolute;
  left: -22.80%;
  right: 80.65%;
  top: -58.73%;
  bottom: 60.32%;
  stroke: ${props => props.colorSecundary};
  stroke-width: 20px;
  border-radius: 50%;
  opacity: 0.3;
  border: 25px solid ${props => props.colorSecundary};
  box-sizing: border-box;
  z-index: 10;
  
}

.elipse2 {
  position: absolute;
  width: 50px;
  height: 50px;
  left: 63%;
  bottom: 9%;
  background: ${props => props.colorSecundary};
  border-radius: 50%;
  border: 14px solid ${props => props.colorPrimary};
  box-sizing: border-box;
  opacity: 0.5;
  z-index: 15;
}

.elipse3 {
  position: absolute;
  width: 83px;
  height: 83px;
  left: 52%;
  bottom: -20%;
  background: ${props => props.colorSecundary};
  border-radius: 50%;
  opacity: 0.3;
  border: 33px solid ${props => props.colorSecundary};
  box-sizing: border-box;
  z-index: 10;
}

.rectangulo1 {
  position: absolute;
  width: 32px;
  height: 10px;
  left: 45%;
  bottom: 36%;
  background: ${props => props.colorPrimary};
  opacity: 0.5;
  z-index: 15;

}

.rectangulo2 {
  position: absolute;
  width: 8px;
  height: 10px;
  right: 0;
  bottom: 36%;
  background: ${props => props.colorPrimary};
  opacity: 0.5;
  z-index: 15;
}

:hover {
  background-color: ${props => props.colorSecundary};
  border: 1px solid ${props => props.colorSecundary};
}

`;