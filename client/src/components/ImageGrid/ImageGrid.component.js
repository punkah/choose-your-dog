import React, { Component } from "react";
import "./ImageGrid.css";

class ImageGrid extends Component {
  render() {
    if (!this.props.images) {
      return <div>Please select a dog breed.</div>;
    }
    return (
      <div className="imageGrid">
        {this.props.images.map((image, i) => (
          <img src={image} className="image" alt="dog picture" key={i} />
        ))}
      </div>
    );
  }
}

export default ImageGrid;
