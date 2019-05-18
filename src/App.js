import React from "react";
import { render } from "react-dom";
import Results from "./Results";

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>Trending Repos</h1>
        </header>
        <Results />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
