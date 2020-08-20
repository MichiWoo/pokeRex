import styled from 'styled-components'
import {
  GreenBack, RedBack, BlueBack, GreenLigth, GrayBack, YellowBack, PurpleBack, BrownBack, PinkBack, GrayBack_F, PurpleBack_P,
  BrownBack_E, BlueButton_F, GreenButton, RedButton, BlueButton, GreenLigthText, GrayButton, YellowButton, PurpleText, BrownButton,
  PinkButton, GrayButton_F, PurpleButton_P, BrownButton_E } from '../../styles/GlobalStyles'

export const Card = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  
  &.card_grass {
    background-color: ${GreenBack};
  }
  &.card_fire {
    background-color: ${RedBack};
  }
  &.card_water {
    background-color: ${BlueBack};
  }
  &.card_bug {
    background-color: ${GreenLigth};
  }
  &.card_normal {
    background-color: ${GrayBack};
  }
  &.card_electric {
    background-color: ${YellowBack};
  }
  &.card_poison {
    background-color: ${PurpleBack};
  }
  &.card_ground {
    background-color: ${BrownBack};
  }
  &.card_fairy {
    background-color: ${PinkBack};
  }
  &.card_fighting {
    background-color: ${GrayBack_F};
  }
  &.card_psychic {
    background-color: ${PurpleBack_P};
  }
  &.card_rock {
    background-color: ${BrownBack_E};
  }
  &.card_flying {
    background-color: ${BlueButton_F};
  }
  

  .card_header {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  }

  .card_header_top {
    width: 100%;
  }

    
  .card_header_top_button {
  margin-left: 5px;
  padding: .575rem .575rem;
  border-radius: 50%;
  color: white;
  transition: color .15s ease-in-out, background-color .15s ease-in-out;
    &.grass {
      background-color: ${GreenBack};
      border: 1px solid ${GreenBack};
    }
    &.fire {
      background-color: ${RedBack};
      border: 1px solid ${RedBack};
    }
    &.water {
      background-color: ${BlueBack};
      border: 1px solid ${BlueBack};
    }
    &.bug {
      background-color: ${GreenLigth};
      border: 1px solid ${GreenLigth};
    }
    &.normal {
      background-color: ${GrayBack};
      border: 1px solid ${GrayBack};
    }
    &.electric {
      background-color: ${YellowBack};
      border: 1px solid ${YellowBack};
    }
    &.poison {
      background-color: ${PurpleBack};
      border: 1px solid ${PurpleBack};
    }
    &.ground {
      background-color: ${BrownBack};
      border: 1px solid ${BrownBack};
    }
    &.fairy {
      background-color: ${PinkBack};
      border: 1px solid ${PinkBack};
    }
    &.fighting {
      background-color: ${GrayBack_F};
      border: 1px solid ${GrayBack_F};
    }
    &.psychic {
      background-color: ${PurpleBack_P};
      border: 1px solid ${BlueBack};
    }
    &.rock {
      background-color: ${BrownBack_E};
      border: 1px solid ${BlueBack};
    }
    &.flying {
      background-color: ${BlueButton_F};
      border: 1px solid ${BlueBack};
    }
  }

  .card_header_top_button:hover {
    font-weight: 800;
  }

  .card_header_middle {
    width: 100%;
    margin-top: 15px;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card_header_middle_name {
    margin-left: 15px;
    color: white;
    font-size: 32px;
    font-weight: 600;
  }

  .card_header_middle_id {
    margin-right: 15px;
    color: white;
    font-size: 20px;
    font-weight: 800;
  }

  .card_header_bottom {
    display: grid;
    grid-template-columns: 4fr 3fr;
  }

  .card_header_bottom_item {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .card_header_bottom_item_button {
    border-radius: 15px;
    color: #fff;
    text-align: center;
    font-weight: 600;
    font-size: 16px;
    padding: 5px 10px 5px 10px;
    &.grass {
      background-color: ${GreenButton};
      border: 1px solid ${GreenBack};
    }
    &.fire {
      background-color: ${RedButton};
      border: 1px solid ${RedBack};
    }
    &.water {
      background-color: ${BlueButton};
      border: 1px solid ${BlueBack};
    }
    &.bug {
      background-color: ${GreenLigthText};
      border: 1px solid ${GreenLigth};
    }
    &.normal {
      background-color: ${GrayButton};
      border: 1px solid ${GrayBack};
    }
    &.electric {
      background-color: ${YellowButton};
      border: 1px solid ${YellowBack};
    }
    &.poison {
      background-color: ${PurpleText};
      border: 1px solid ${PurpleBack};
    }
    &.ground {
      background-color: ${BrownButton};
      border: 1px solid ${BrownBack};
    }
    &.fairy {
      background-color: ${PinkButton};
      border: 1px solid ${PinkBack};
    }
    &.fighting {
      background-color: ${GrayButton_F};
      border: 1px solid ${GrayBack_F};
    }
    &.psychic {
      background-color: ${PurpleButton_P};
      border: 1px solid ${BlueBack};
    }
    &.rock {
      background-color: ${BlueButton_F};
      border: 1px solid ${BlueBack};
    }
    &.flying {
      background-color: ${BrownButton_E};
      border: 1px solid ${BlueBack};
    }
  }

  .card_header_bottom_item span {
    color: white;
    font-size: 16px;
    font-weight: 600;
    margin-right: 5px;
  }

  .card_imagen {
    margin: 15px 0 15px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }

  .card_data {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #48D0B0;
    &.grass {
    background-color: ${GreenBack};
    }
    &.fire {
      background-color: ${RedBack};
    }
    &.water {
      background-color: ${BlueBack};
    }
    &.bug {
      background-color: ${GreenLigth};
    }
    &.normal {
      background-color: ${GrayBack};
    }
    &.electric {
      background-color: ${YellowBack};
    }
    &.poison {
      background-color: ${PurpleBack};
    }
    &.ground {
      background-color: ${BrownBack};
    }
    &.fairy {
      background-color: ${PinkBack};
    }
    &.fighting {
      background-color: ${GrayBack_F};
    }
    &.psychic {
      background-color: ${PurpleBack_P};
    }
    &.rock {
      background-color: ${BrownBack_E};
    }
    &.flying {
      background-color: ${BlueButton_F};
    }
  }

  .card_data_container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f7f7ee;
    border-top-right-radius: 35px;
    border-top-left-radius: 35px;
  }

  .card_data_navbar {
    margin: 10px 0 10px 0;
    width: 90%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .card_data_navbar_item {
    font-size: 16px;
    font-weight: 600;
    padding-bottom: 10px; 
    color: #a6a6ab;
    &.active {
    border-bottom:  2px solid #6C79DB;
    color: black;
    }
  }

  .card_data_navbar_item:hover {
    border-bottom: 2px solid #6C79DB;
    color: #6C79DB;
  }

  .card_data_content {
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
  }

  .card_data_content_item_about_container {
    display: flex;
    justify-content: center;
    align-content: center;
    box-shadow: 0px 8px 23px rgba(0, 0, 0, 0.12);
    border-radius: 12px;
  }

  .card_data_content_item_about_container_item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 35vw;
  }

  .card_data_content_item_about_container_item_title {
    font-size: 14px;
    font-weight: 600;
    margin: 10px 15px;
    text-align: center;
  }

  .card_data_content_item_about_container_item_data {
    font-size: 14px;
    font-weight: 400;
    margin: 0px 15px 15px 15px;
    text-align: center;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`

export const ImgContainer = styled.div`
  position: absolute;
  z-index: 1;
`