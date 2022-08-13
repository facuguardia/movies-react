import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { get } from "../utils/httpClient";
import style from "./MovieDetails.module.css";

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect (() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
    })
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <div className={style.detailsContainer}>
      <img
        className={`${style.col} ${style.movieImage}`}
        src={imgUrl}
        alt={movie.title}
      />
      <div className={`${style.col} ${style.movieDetails}`}>
        <p className={style.item}>
          <strong>Title: </strong>
          {movie.title}
        </p>
        <p>
          <strong>Genres: </strong>
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Description: </strong>
          {movie.overview}
        </p>
      </div>
    </div>
  );
}
