import React from "react";
import { MainMenu } from "./styles";
import { MenuA } from "./styles";
import { TextMenuA } from "./styles";
import { ButtonMenuA } from "./styles";
import { Link } from "./styles";
import { MdHome } from "react-icons/md";
import { MdList } from "react-icons/md";
import { white } from "ansi-colors";
import { ContainerList } from "./styles";

const COLOR = "white";
const SIZE = "32px";

export const RightContainer = () => {
  return (
    //Pondemos todo el router aqui sin falta aunque sean submenus
    <MainMenu>
      <MenuA>
        <MdHome size={SIZE} color={COLOR} />
        <TextMenuA>Constructions</TextMenuA>
        <ContainerList>
          <Link to="/chart">
            <MdList size={SIZE} />
          </Link>
        </ContainerList>
      </MenuA>
    </MainMenu>
  );
};

// <Router>
// <Consult path="/" />
// <Chart path="/chart" />
// <Paths path="/paths" />
// </Router>
