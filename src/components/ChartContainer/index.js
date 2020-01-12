import { MainMenu } from "./styles";
import { MenuA } from "./styles";
import { TextMenuA } from "./styles";
import { ButtonMenuA } from "./styles";
import CARTOMap from "../CARTOMap";
import $ from "jquery";
import { MdArrowBack } from "react-icons/md";

import React, { useState } from "react";
import {
  Link,
  TopMenu,
  SelectMenu,
  ButtonConsult,
  InputSearch,
  ContainerMenu,
  Scroll,
  HeaderCard,
  BodyCard,
  Back,
  Tittle,
  ContainerSelects,
  SpanData,
  SpanTittle
} from "./styles";

export const ChartContainer = () => {
  const [list, setCount] = useState([]);

  function Consult() {
    const yearOne = document.getElementById("selectOne");
    const optionYearOne = yearOne.options[yearOne.selectedIndex].value;
    optionYearOne.toString();

    const yearTwo = document.getElementById("selectTwo");
    const optionYearTwo = yearTwo.options[yearTwo.selectedIndex].value;
    optionYearTwo.toString();

    const sql_statement =
      "SELECT saleprice,yearbuilt,saaddr,propertylo,generaluse FROM s_monica WHERE yearbuilt BETWEEN" +
      " " +
      "'" +
      optionYearOne +
      "'" +
      " " +
      "AND" +
      " " +
      "'" +
      optionYearTwo +
      "'";

    console.log(sql_statement);

    https: $.getJSON(
      "https://angelsuarez28.carto.com/api/v2/sql/?q=" + sql_statement,
      function(data) {
        const isNotId = item => item.saleprice !== optionYearOne;
        const updatedList = list.filter(isNotId);
        const newList = data.rows;
        setCount(updatedList);
        setCount(newList);
      }
    );
  }

  const yearsBuilt = [];
  let result = "";
  let i = 1903;

  do {
    i = i + 1;
    result = i;
    yearsBuilt.push(result);
  } while (i < 2018);

  const SIZE = "32px;";

  return (
    <ContainerMenu>
      <TopMenu>
        <Back>
          <Link to="/">
            <MdArrowBack size={SIZE} />
          </Link>
        </Back>
        <Tittle>Select a period of time: </Tittle>
        <ContainerSelects>
          <SelectMenu id="selectOne">
            {yearsBuilt.map(years => (
              <option value={years}>{years}</option>
            ))}
          </SelectMenu>
          <SelectMenu id="selectTwo">
            {yearsBuilt.map(years => (
              <option value={years}>{years}</option>
            ))}
          </SelectMenu>
        </ContainerSelects>
        <ButtonConsult onClick={() => Consult()}>Consult</ButtonConsult>
      </TopMenu>
      <Scroll>
        {list.map(item => (
          <div>
            <HeaderCard>
              <SpanTittle>{item.generaluse}</SpanTittle>
            </HeaderCard>
            <BodyCard>
              <SpanData>Adress: {item.saaddr}</SpanData>
              <SpanData>Sale Price: {item.saleprice}$</SpanData>
              <SpanData>Year Built: {item.yearbuilt}</SpanData>
            </BodyCard>
          </div>
        ))}
      </Scroll>
    </ContainerMenu>
  );
};

