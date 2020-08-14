import styled from 'styled-components'

export const Card = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #48D0B0;

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
    border: 1px solid #48D0B0;
    background-color: #48D0B0;
    transition: color .15s ease-in-out, background-color .15s ease-in-out;
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
    font-weight: 400;
    padding: 5px 10px 5px 10px;
    background-color: #61e1ca;
    border: 1px solid #61e1ca;
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
  }

  .card_data {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #48D0B0;
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

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`