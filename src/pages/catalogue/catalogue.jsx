import React from "react";
import "./catalogue.css";
import GoToTop from "../../components/GoToTop";
import Card from "../../components/card";
import PanelData from "../../Data/PanelData";

const Catalogue = () => {
  return (
    <div className="container">
      <div className="catalogue-container">
        <h1>Catalogue</h1>
        <p>
          Select and find the best solar solutions within Kenya from our range
          of options!
        </p>
        {/* //cards of all items available */}
        <div className="equipment">
          {PanelData.map((data, i) =>
            (<Card
            key={i}
            title={data.title}
            imageUrl={data.image}
            text={data.text}
            price={data.price}
            supplier={data.supplier}
            logo={data.logo}
          />)

          )}
          
        </div>
      </div>
      <GoToTop />
    </div>
  );
};

export default Catalogue;
