import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";

export const MainMenu = styled.div`
  position: absolute;
  right: 0px;
  width: 400px;
  height: 100%;
  background: #252831;
`;

export const MenuA = styled.div`
  width: 330px;
  height: 80px;
  background: #424858;
  margin-left: 40px;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; 
  border-radius: 5px; 
`;

export const TextMenuA = styled.h1`
  font-size: 1em;
  text-align: center;
  color: #f2f0f0;
  margin-left: 15px; 
`;

export const ButtonMenuA = styled.button`
  background: #252831;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid white;
  border-radius: 3px;
  cursor: pointer;
`;

export const ContainerList = styled.div`
  margin-left: 15px;
  height: 35px; 
  width: 35px;
  background-color: #252831;
  display: flex;
  justify-content: center; 
  border-radius: 3px; 
`;

export const Link = styled(LinkRouter)`
  color: white;
  cursor: pointer;
`;
