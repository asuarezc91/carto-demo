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
  width: 200px;
  height: 100px;
  background: #424858;
`;

export const TextMenuA = styled.h1`
  font-size: 1em;
  text-align: center;
  color: #f2f0f0;
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


export const Link = styled(LinkRouter)`
background: #252831;
color: white;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid white;
border-radius: 3px;
cursor: pointer;
`;