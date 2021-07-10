import React from "react";
import "../styles/Movie.css";
import ContentDialog from "./ContentDialog";

class Movie extends React.Component {
  state = {
    openDialog: false,
  };

  closeDialog = () => {
    this.setState({
      openDialog: false,
    });
  };

  render() {
    const movie = this.props.content;
    const img =
      movie.poster_path === null
        ? "https://cdn0.iconfinder.com/data/icons/apgh-cinema-and-fastfood/64/Camera__cinema__cinematography__film__media__movie_-512.png"
        : `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    return (
      <div className="movie">
        <img
          onClick={() => this.setState({ openDialog: true })}
          alt="asd"
          className="movie-img"
          width="180"
          height={movie.poster_path === null ? "260" : ""}
          src={img}
        />
        <div
          className="movie-title"
          onClick={() => this.setState({ openDialog: true })}
        >
          <b>{movie.title}</b>
        </div>
        <div className="movie-release-date">{movie.release_date}</div>
        {this.state.openDialog ? (
          <ContentDialog content={movie} onClose={this.closeDialog} />
        ) : null}
      </div>
    );
  }
}

export default Movie;
