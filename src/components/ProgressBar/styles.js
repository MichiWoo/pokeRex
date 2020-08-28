import styled from 'styled-components'


export const Progress = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 8px;

  .progress {
    padding: 0;
    border-radius: 30px;
    background: rgb(247 247 238);  
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.08);
  }

  .progress-bar {
    height: 5px;
    border-radius: 45px;
    background-image: 
      linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.05));
    transition: 0.4s linear;  
    transition-property: width, background-color;    
  }

  .progress-moved .progress-bar {
    width: ${props => props.value}%;
    background-color: #EF476F;  
    animation: progressAnimation 1s;
  }

  @keyframes progressAnimation {
    0%   { width: 5%; background-color: #F9BCCA;}
    100% { width: ${props => props.value}%; background-color: #EF476F; }
  }
`

