import React from "react";
import PropTypes from "prop-types";
import StarRating from "./StarRating";
import "../css/movie-list.scss";

function MovieList({ movies }) {
  const Movie = ({ movie }) => {
    return (
      <div className="movie">
        <img className="posterImage" src={movie.posterImage} alt={movie.title} />
        <h5 className="title">{movie.title}</h5>
        <p className="subtitle">
          Genre: {movie.genre.join(",")}
        </p>
        <StarRating rating={movie.rating} />
      </div>
    );
  };

  return (
    <div className="movieList">
      {movies.map((movie) => (
        <Movie movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.array,
  setSelectedMovie: PropTypes.func,
};
