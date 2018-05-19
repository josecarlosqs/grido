import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const pk = require("../package.json")

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Grido</h1>
        <p>Tool for generate CSS Grids</p>
        <form method="post">

          <div className="block">
            <p>Your grid will be based on ...</p>
            <div class="group">
              <label>
                <input type="radio" name="based_on" value="floats" checked={true} />
                <span>Floats</span>
              </label>
              <label>
                <input type="radio" name="based_on" value="flex" />
                <span>Flex</span>
              </label>
            </div>
          </div>

          <div className="block">
            <p>The number of columns you want for your grid is ...</p>
            <label>
              
            </label>
          </div>
          

          


        </form>
        <div id="preview">
          <p>Awaiting columns number</p>
        </div>

        <p>{`Version ${pk.version} | @pedepepe`}</p>
      </div>

    );
  }
}

export default App;
