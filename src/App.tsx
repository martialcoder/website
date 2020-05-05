import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Content from "./pages/Content";
import Scroll from "./components/Animated/Scroll";
import Footer from "./components/Layout/Footer";

export default function App() {
  return (
    <Router>
      <Scroll>
        <Switch>
          <Route path="/content">
            <Content />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Scroll>
    </Router>
  );
}
