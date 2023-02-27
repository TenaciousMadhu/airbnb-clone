import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import HeroComponent from "./components/HeroComponent";
import Card from "./components/card";
import Data from "./Data";

function App() {
  const CardData = Data.map((CardDatum) => {
    return (
      <Card
        key={CardDatum.id}
        coverImg={CardDatum.coverImg}
        rating={CardDatum.stats.rating}
        reviewCount={CardDatum.stats.reviewCount}
        location={CardDatum.location}
        title={CardDatum.title}
        price={CardDatum.price}
      />
    );
  });
  return (
    <div className="App">
      <Navbar />
      <HeroComponent />
      <div className="card-data-container">{CardData}</div>
    </div>
  );
}

export default App;
