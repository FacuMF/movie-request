import React from "react";
import ReactDom from "react-dom";
import "../styles/Dialog.css";
import { MdClear } from "react-icons/md";

export default function ContentDialog({ content, onClose }) {
  const titulo =
    content.media_type === "movie" ? content.title : content.original_name;
  const backImg =
    content.backdrop_path === null
      ? "https://g.foolcdn.com/editorial/images/469296/empty-movie-theater.jpg"
      : `https://image.tmdb.org/t/p/w500${content.backdrop_path}`;

  const posterImg =
    content.poster_path === null
      ? "https://cdn0.iconfinder.com/data/icons/apgh-cinema-and-fastfood/64/Camera__cinema__cinematography__film__media__movie_-512.png"
      : `https://image.tmdb.org/t/p/w500${content.poster_path}`;
  return ReactDom.createPortal(
    <>
      <div className="dialog-background" />
      <div className="dialog-container">
        <img
        id="back-img"
          alt=""
          src={window.innerWidth > 400 ? backImg : posterImg }
          style={{
            opacity: `0.5`,
            borderRadius: "25px",
          }}
        />
        <div className="dialog-content">
            <img
              alt="asd  "
              className="poster-image"
              src={posterImg}
              // width="200"
              // height={content.poster_path === null ? "300" : ""}
            />
          <div id="dialog-text">
            <h2>{titulo}</h2>
            <p>{content.overview}</p>
          </div>
          <button className="close-dialog" onClick={onClose}>
            <MdClear />
          </button>
        </div>
      </div>
    </>,
    document.getElementById("content-dialog")
  );
}
