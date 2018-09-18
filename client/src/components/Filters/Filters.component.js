import React, { Component } from "react";
import Select from "react-select";
import "./Filters.css";

class Filters extends Component {
  onChange = value => {
    this.props.getImages(value.value);
  };

  render() {
    return (
      <div className="filterContainer">
        <Select
          onChange={this.onChange}
          options={this.props.breeds.map(value => ({ value, label: value }))}
          className="dropdown"
        />
      </div>
    );
  }
}

export default Filters;
