import styled from "styled-components";
export const Tabs = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  padding-bottom: 10px; 
  color: #a6a6ab;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
  
`;

export const Tab = styled.button`
  width: 15vw;
  height: 42px;
  margin: 0 0.5vw;
  font-size: 16px;
  background-color: #f7f7ee;
  border: none;
  outline: none;
  border-bottom: ${props => (props.active ? "2px solid #6C79DB" : "")};
  color: ${props => (props.active ? "black" : "#a6a6ab")};
  :hover {
    border-bottom: 2px solid #6C79DB;
    color: #6C79DB;
    cursor: pointer;
  }
`;
export const Content = styled.div`
  ${props => (props.active ? "" : "display:none")}
`;
