import React from "react";
import Feature from "./Feature";
import PopularMovie from "./PopularMovie";
import Banner from "./Banner";
const Home = () => {
  return (
    <React.Fragment>
      <Banner />
      <PopularMovie />
      <Feature />
    </React.Fragment>
  );
};

export default Home;
