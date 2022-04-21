import React, { Component } from "react";
import Header from './helpers/Header';
import Routes from "./helpers/Routes";


class App extends Component {
  render() {

    return (
      <div className="App">
        {/*<Header />*/}
        <main>

          <Routes />

        </main>


      </div>
    );
  }
}

export default App;
