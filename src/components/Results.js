import React from "react";
import Movie from "./Movie";
import Serie from "./Serie";

class Results extends React.Component {
  render() {
    console.log(this.props.results[0]);
    return (
      <div>
        {this.props.results.map((item) =>
          this.props.categoria === "peliculas" ? (
            <Movie key={item.id} content={item} />
          ) : (
            <Serie key={item.id} content={item} />
          )
        )}
      </div>
    );
  }
}

export default Results;
