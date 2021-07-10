import { MdMovie } from "react-icons/md";
import React from "react";
import "../App.css";

class SideBar extends React.Component {
  handleClick = (event) => {
    this.props.onCategoryChange(event.target.value);
  };

  render() {
    return (
      <div className="side-bar">
        <div className="logo">
          <MdMovie />
          <div className="logo-text">Movies</div>
        </div>
        <div className="side-list">
          <button
            className="categoria"
            onClick={this.handleClick}
            value="peliculas"
          >
            Peliculas
          </button>
          <button
            className="categoria"
            onClick={this.handleClick}
            value="series"
          >
            Series
          </button>
        </div>
      </div>
    );
  }
}

export default SideBar;
