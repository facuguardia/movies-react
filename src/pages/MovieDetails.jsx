import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Spinner } from "../components/Spinner";
import { get } from "../utils/httpClient";
import style from "./MovieDetails.module.css";

export function MovieDetails() {
  // capturamos en identificador de la pelicula, el cual es pasado en el switch de la ruta /movie/:movieId.
  const { movieId } = useParams();
  // efecto de loading para la demora en la carga de peliculas y sus detalles.
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  // useEffect nos permite hacer un llamado asincrono y nos trae el identificador que tenga la pelicuala seleccionada, el id lo vas a encontrar en la ruta de la pelicula seleccionada.
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
