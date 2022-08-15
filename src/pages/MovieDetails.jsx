import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Spinner } from "../components/Spinner";
import { get } from "../utils/httpClient";
import style from "./MovieDetails.module.css";
import placeholder from "../placeholder.png";

export function MovieDetails() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setIsLoading(false);
    });
  }, [movieId]);

  if (isLoading) {
    return <Spinner />;
  }

  const imgUrl = movie.poster_path
  ? "https://image.tmdb.org/t/p/w300" + movie.poster_path
  : placeholder;
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
