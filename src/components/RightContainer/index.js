import React from "react";
import { MainMenu } from "./styles";
import { MenuA } from "./styles";
import { TextMenuA } from "./styles";
import { ButtonMenuA } from "./styles";
import { Link } from "./styles";
import { MdHome } from "react-icons/md";
import { MdList } from "react-icons/md";
import { ContainerList } from "./styles";
import { MainContainer } from "./styles";
import { MdSearch } from "react-icons/md";
import { ToggleButton } from "./styles";

const COLOR = "white";
const SIZE = "26px";

export const RightContainer = () => {
  return (
    <div>
      <MainContainer>
        <MainMenu>
          <MenuA>
            <MdHome size={SIZE} color={COLOR} />
            <TextMenuA>Homes by year build</TextMenuA>
            <ContainerList>
              <Link to="/chart">
                <MdList size={SIZE} />
              </Link>
            </ContainerList>
          </MenuA>
        </MainMenu>
      </MainContainer>
    </div>
  );
};
