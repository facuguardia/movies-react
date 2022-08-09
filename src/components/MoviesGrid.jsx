import { MoviesCard } from "./MovieCard";
import movies from "./movies.json";
import styles from "./MovieGrid.module.css";

export function MoviesGrid() {
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MoviesCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
