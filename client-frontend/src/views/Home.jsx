import React, { useEffect, useState } from "react";
import Feature from "./Feature";
import PopularMovie from "./PopularMovie";
import Banner from "./Banner";
import { getTopView } from "../utils/MovieAPI";

const Home = () => {
  const [topViewList, setTopView] = useState([]);

  useEffect(() => {
    getTopView()
      .then(response => {
        setTopView(response.content);
      })
      .catch(err => console.log("Get TopView Error :", err));

    return () => console.log("Tat");
  }, []);

  return (
    <React.Fragment>
      {/* <Banner /> */}
      <PopularMovie />
      <Feature
        feature={topViewList}
        recently={topViewList}
        topview={topViewList}
      />
    </React.Fragment>
  );
};

export default Home;
