import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";

// export const MainMenu = styled.div`
//   position: absolute;
//   right: 0px;
//   width: 400px;
//   height: 100%;
//   background: #252831;
// `;

// export const MenuA = styled.div`
//   width: 100%;
//   height: 100%;
//   background: #424858;
// `;

// export const TextMenuA = styled.h1`
//   font-size: 1em;
//   text-align: center;
//   color: #f2f0f0;
// `;

// export const ButtonMenuA = styled.button`
//   position:relative;
//   left:0px;
//   background: #252831;
//   color: white;
//   font-size: 1em;
//   border: 2px solid white;
//   border-radius: 3px;
//   cursor: pointer;
// `;

// export const Link = styled(LinkRouter)`
//   position: absolute;
//   right: 0px;
//   background: #252831;
//   color: white;
//   font-size: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid white;
//   border-radius: 3px;
//   cursor: pointer;
//   height: 30px;
//   widht: 30px;
// `;

// margin: 1em;

export const ContainerMenu = styled.div`
  position: absolute;
  right: 0px;
  width: 400px;
  height: 100%;
  background: #252831;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Back = styled.div`
  position: absolute;
  top: 0px;
  right: 2px;
  height: 35px;
  width: 35px;
  background-color: #424858;
  display: flex;
  justify-content: center;
  border-radius: 3px;
`;

export const Link = styled(LinkRouter)`
  color: white;
  cursor: pointer;
`;

export const Tittle = styled.p`
  color: white;
  font-size: 1em;
`;

export const PathMenuPrint = styled.div``;

export const TopMenu = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  height: 120px;
  width: 400px;
  background: #252831;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: solid 0.1px #424858;
`;

export const SelectMenu = styled.select`
  width: 100px;
  height: 30px;
  background: #424858;
  color: white;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  margin-left: 15px;

  option {
    color: white;
    background: #424858;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
    cursor: pointer;
  }
`;

export const ButtonConsult = styled.button`
  margin-top: 10px;
  margin-bottom: 22px;
  background-color: #424858;
  border: none;
  border-radius: 4px; 
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  padding: 7px 22px;
`;

export const InputSearch = styled.input`
  position: absolute;
  height: 24px;
  top: 90px;
  width: 395px;
  background: #f2f0f0;
`;

export const Scroll = styled.div`
  position: absolute;
  top: 120px;
  right: 0px;
  width: 400px;
  background: #252831;
  height: calc(100% - 120px);
  overflow: overlay;
`;

export const HeaderCard = styled.div`
  right: 0px;
  width: 400px;
  background: #252831; 
  color: white;
`;

export const BodyCard = styled.div`
  top: 52px;
  right: 0px;
  width: 400px;
  background: #424858;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: #C5C5C5;
`;

export const ContainerSelects = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;


export const SpanData = styled.span`
  margin-top: 6px;
  margin-left: 4px;
`;

export const SpanTittle = styled.span`
  margin-left: 4px;
`;
