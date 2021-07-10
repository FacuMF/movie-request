import React from "react";
import "../styles/Movie.css";
import ContentDialog from "./ContentDialog";

class Serie extends React.Component {
  state = {
    openDialog: false,
  };

  closeDialog = () => {
    this.setState({
      openDialog: false,
    });
  };

  render() {
    const serie = this.props.content;
    const img =
      serie.poster_path === null
        ? "https://cdn0.iconfinder.com/data/icons/apgh-cinema-and-fastfood/64/Camera__cinema__cinematography__film__media__movie_-512.png"
        : `https://image.tmdb.org/t/p/w500${serie.poster_path}`;
    return (
      <div className="movie">
        <img
          onClick={() => this.setState({ openDialog: true })}
          alt=""
          className="movie-img"
          width="180"
          height={serie.poster_path === null ? "260" : ""}
          src={img}
        />
        <div
          className="movie-title"
          onClick={() => this.setState({ openDialog: true })}
        >
          <b>{serie.original_name}</b>
        </div>
        <div className="movie-release-date">{serie.first_air_date}</div>
        {this.state.openDialog ? (
          <ContentDialog content={serie} onClose={this.closeDialog} />
        ) : null}
      </div>
    );
  }
}

export default Serie;
