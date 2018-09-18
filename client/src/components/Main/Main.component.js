import React, { Component } from "react";
import Header from "../Header/Header.component";
import Filters from "../Filters/Filters.container";
import ImageGrid from "../ImageGrid/ImageGrid.component";
import "./Main.css";

class Main extends Component {
  componentDidMount() {
    this.props.getBreeds();
  }

  render() {
    return (
      <div className="mainContainer">
        <div className="main">
          <Header />
          <Filters breeds={this.props.breeds} />
          <ImageGrid images={this.props.images} />
        </div>
      </div>
    );
  }
}

export default Main;
