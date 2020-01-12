import React from "react";
import CARTOMap from "./CARTOMap";
import CARTOVLMap from "./CARTOVLMap";
import Header from "./layout/Header";
import RightBar from "./layout/RightBar";
import LeftBar from "./layout/LeftBar";
import BottomBar from "./layout/BottomBar";
import Panel from "./layout/Panel";
import "@carto/airship-style";
import { RightContainer } from "./RightContainer";
import { ChartContainer } from "./ChartContainer";
import { Router } from "@reach/router";

const Page = () => (
  <as-responsive-content>
    <body className="as-app-body as-app">
      <Header />

      <div className="as-content">
        <main className="as-main">
          <div className="as-map-area">
            <CARTOMap />
          </div>
        </main>
        <Router>
          <RightContainer path="/" />
          <ChartContainer path="/chart" />
        </Router>
      </div>
    </body>
  </as-responsive-content>
);

export default Page;

 