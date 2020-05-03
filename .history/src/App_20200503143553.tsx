import React, { Component } from "react";
import logoSrc from "./assets/martial-coder.svg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header style={{ height: "500px" }} className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <img src={logoSrc} />
      </div>
    );
  }
}

export default App;
