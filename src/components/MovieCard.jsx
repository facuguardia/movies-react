import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";

export function MoviesCard({ movie }) {
  const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    // aca con la etiqueta link podemos hacer que al cambiar de la imagen de la pelicula al detalle de la pelicula no se refresque la pagina de esa manera ahorramos recursos ya que no necesita buscar toda la info del servidor. Esto lo podemos logras gracias a la libreria de react-router-dom.
    <li className={styles.movieCard}>
      <Link to={"/movie/" + movie.id}>
        <img
          width={230}
          height={345}
          className={styles.movieImg}
          src={imgUrl}
          alt={movie.title}
        />
        <div>{movie.title}</div>
      </Link>
    </li>
  );
}
