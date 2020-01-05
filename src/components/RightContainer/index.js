import React from "react";
import { MainMenu } from "./styles";
import { MenuA } from "./styles";
import { TextMenuA } from "./styles";
import { ButtonMenuA } from "./styles";
import { Link } from "./styles";

export const RightContainer = () => {
  return (
    //Pondemos todo el router aqui sin falta aunque sean submenus
    <MainMenu>
      <MenuA>
        <TextMenuA>Menu A</TextMenuA>
        <Link to="/chart"></Link>
      </MenuA>
      <MenuA>
        <TextMenuA>Menu B</TextMenuA>
        <ButtonMenuA>ButtonMenuB</ButtonMenuA>
      </MenuA>
    </MainMenu>
  );
};

// <Router>
// <Consult path="/" />
// <Chart path="/chart" />
// <Paths path="/paths" />
// </Router>
