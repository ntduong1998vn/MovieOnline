import React from "react";
import Header from "./views/Header";
import Footer from "./views/Footer";
import MyNavBar from "./views/MyNavBar";
import Genres from "./views/Genres";
import Home from "./views/Home";
import { Switch, Route, Redirect } from "react-router-dom";
function App() {
  return (
    <div>
      <Header />
      <MyNavBar />

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/genres" component={Genres} />
        {/* <Redirect to="/" /> */}
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
