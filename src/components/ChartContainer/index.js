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
  ContainerSelects
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
      "SELECT saleprice,bedrooms,propertylo FROM s_monica WHERE yearbuilt BETWEEN" +
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
      "https://asuarezc91.carto.com/api/v2/sql/?q=" + sql_statement,
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
  } while (i < 1930);

  const SIZE = '32px;' 

  return (
    <ContainerMenu>
      <TopMenu>
        <Back>
          <Link to="/"><MdArrowBack size={SIZE} /></Link>
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
              <span>{item.propertylo}</span>
              <button
              // onClick={() => this.zoomToGeometry(item.ID)}
              // type="button"
              // class="zoom"
              ></button>
            </HeaderCard>
            <BodyCard>
              <span>Dificultad: {item.bedrooms}</span>
              <span>Tipo: {item.bedrooms}</span>
              <span>Longitud: {item.bedrooms}</span>
            </BodyCard>
          </div>
        ))}
      </Scroll>
    </ContainerMenu>
  );
};

// "SELEC saleprice FROM s_monica WHERE yearbuilt BETWEEN" +
//       optionYearOne +
//       "AND" +
//       optionYearTwo;

// const isNotId = item => item.objectID !== id;
//     const updatedList = list.filter(isNotId);
//     setCount(updatedList);

// <InputSearch />

// import React, { Component } from "react";
// import { render } from "react-dom";
// import L from "leaflet";
// import carto, { filter, source, style, layer } from "@carto/carto.js";
// import { connect } from "react-redux";
// import styled from "styled-components";
// import {
//   storeLayers,
//   setMap,
//   setBboxFilter,
//   changeViewport,
//   changeCartoBBox
// } from "../actions/actions";
// import InfoWindow from "../components/InfoWindow";
// import layers from "../data/layers";
// import C from "../data/C";
// import "@carto/airship-style";
// import $ from "jquery";

// function deffinitionExpression() {
//   const cartoLayers = Object.keys(layers).reduce((all, layerName) => {
//     const { options, ...other } = layers[layerName];
//     const source = new carto.source.SQL(other.query);
//     source.setQuery("SELECT * FROM s_monica WHERE size  = 1650");
//     const style = new carto.style.CartoCSS(other.cartocss);
//     const layer = new carto.layer.Layer(source, style, options);

//     if (options.featureClickColumns) {
//       layer.on("featureClicked", this.openPopup.bind(this));
//     }

//     if (options.featureClickColumns && layerName === "stores") {
//       console.log(layerName);
//       layer.on("featureClicked", this.openPopupStores.bind(this));
//     }

//     this.props.client.getLeafletLayer().addTo(this.props.map);

//     if (other.visible === false) {
//       layer.hide();
//     }

//     return { ...all, [layerName]: { source, style, layer, ...other } };
//   }, {});

//   this.props.client.addLayers(
//     Object.values(cartoLayers).map(item => item.layer)
//   );
// }

// import React from 'react';
// import ShowcaseButton from '../showcase-components/showcase-button';
// import {
//   XYPlot,
//   XAxis,
//   YAxis,
//   VerticalBarSeries,
//   VerticalBarSeriesCanvas
// } from 'index';

// const myDATA = [
//   {id: '00036', y: 200400, x: 1504121437},
//   {id: '00036', y: 200350, x: 1504121156},
//   {id: '00036', y: 200310, x: 1504120874},
//   {id: '00036', y: 200260, x: 1504120590},
//   {id: '00036', y: 200210, x: 1504120306},
//   {id: '00036', y: 200160, x: 1504120024},
//   {id: '00036', y: 200120, x: 1504119740},
//   {id: '00036', y: 200070, x: 1504119458},
//   {id: '00036', y: 200020, x: 1504119177},
//   {id: '00036', y: 199980, x: 1504118893},
//   {id: '00036', y: 199930, x: 1504118611},
//   {id: '00036', y: 199880, x: 1504118330},
//   {id: '00036', y: 199830, x: 1504118048},
//   {id: '00036', y: 199790, x: 1504117763},
//   {id: '00036', y: 199740, x: 1504117481}
// ];

// const yDomain = myDATA.reduce(
//   (res, row) => {
//     return {
//       max: Math.max(res.max, row.y),
//       min: Math.min(res.min, row.y)
//     };
//   },
//   {max: -Infinity, min: Infinity}
// );

// export default class Example extends React.Component {
//   state = {
//     useCanvas: false
//   };

//   render() {
//     const {useCanvas} = this.state;
//     const content = useCanvas ? 'TOGGLE TO SVG' : 'TOGGLE TO CANVAS';
//     const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;
//     return (
//       <div>
//         <ShowcaseButton
//           onClick={() => this.setState({useCanvas: !useCanvas})}
//           buttonContent={content}
//         />
//         <XYPlot
//           margin={{left: 75}}
//           xType="time"
//           width={300}
//           height={300}
//           yDomain={[yDomain.min, yDomain.max]}
//         >
//           <BarSeries className="vertical-bar-series-example" data={myDATA} />
//           <XAxis />
//           <YAxis />
//         </XYPlot>
//       </div>
//     );
//   }
// }
