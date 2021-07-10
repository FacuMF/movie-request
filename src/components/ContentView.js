import React from "react";
import "../App.css";
import Movie from "./Movie";
import Serie from "./Serie";

class ContentView extends React.Component {
  render() {
    return (
      <div className="content-container">
        <div className="content-title">
          <b>{this.props.content.title}</b>
        </div>
        <div className="content-grid">
          {this.props.content.content.length === 0
            ? "Loading..."
            : this.props.content.content.map((item) =>
                this.props.content.categoria === "peliculas" ? (
                  <Movie key={item.id} content={item} />
                ) : (
                  <Serie key={item.id} content={item} />
                )
              )}
        </div>
      </div>
    );
  }
}

export default ContentView;
