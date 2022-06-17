import React from 'react'
import Carousel from "react-elastic-carousel";
import Item from "./Item";
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
const Carousels = () => {
    return (
        <>
          <h1 style={{ textAlign: "center" }}>Example to setup your carousel in react</h1>
          <div className="App">
            <Carousel breakPoints={breakPoints}>
              <Item>One</Item>
              <Item>Two</Item>
              <Item>Three</Item>
              <Item>Four</Item>
              <Item>Five</Item>
              <Item>Six</Item>
              <Item>Seven</Item>
              <Item>Eight</Item>
            </Carousel>
          </div>
        </>
      );
}

export default Carousels