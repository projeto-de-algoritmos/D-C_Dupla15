import styled from 'styled-components';
import { Button as ButtonMI } from '@material-ui/core';

export const Container = styled.div`
  background-color: #221F1F;
  width: 100vw;
  height: 100vh;
`;

export const Header = styled.div`
  width: 100vw;
  height: 20vh;
  background-image: linear-gradient(0deg, #221F1F, #000000);
  padding: 30px;
  display: flex;
  flex-direction: row;
`;

export const Logo = styled.img`
  width: 140px;
  height: auto; 
  margin-right: 30vw;
`;

export const Context = styled.div`
  width: 100vw;
  padding: 20px;
`;


export const MovieContainer = styled.div`
  background-color: #000000;
  width: 30vh;
  height: 25vh;
  display: flex; 
  overflow: hidden; 
  align-items: center;
  justify-content: center;
  position: relative; 
  
  transition: all 0.7s;
  
  p{
    color: transparent;
    position: absolute;
    display: flex;
    text-align: center;
    font-size: 14px;
    width: 80%;
    bottom: 25px;
    z-index: 10;
    max-lines: 3;
    overflow: hidden;
  }

  span{
    color: transparent;
    position: absolute;
    top: 10px;
    text-align: center;
    font-size: 22px;
    width: 70%;
  }

  strong{
    color: transparent;
    position: absolute;
    top: 18px;
    left: 10px;
    font-size: 13px;
  }

  &:hover {
    img{
      transition: all 0.7s;
      transform: scale(1.5);
      filter: brightness(50%);
    }
    p {
      transition: all 1s;
      color: #ffffff;
      max-height: 3.6em;
    }

    span {
      transition: all 1s;
      color: #ffffff;
      z-index: 10;
    }

    strong {
      transition: all 1s;
      color: #ffffff;
      z-index: 10;
    }
  } 
  
  &::after {
    img{
      transition: all 0.7s;
      transform: scale(1);
      filter: brightness(100%);
    }
  }
`;

export const MovieImage = styled.img`
  width: auto;
  height: 100%; 
  object-fit: cover;
  display: flex;
  /* position: relative; */
`;


export const Button = styled(ButtonMI)`
  && {
    color: white;
    background-color: #DD412D;
    font-size: 12px;
    padding: 10px 90px;
    border-radius: 25px;
    height: 45px;
  }
`;
