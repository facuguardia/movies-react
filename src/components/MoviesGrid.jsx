import { MoviesCard } from "./MovieCard";
import movies from "./movies.json";
import styles from "./MovieGrid.module.css";
import { useEffect } from "react";

export function MoviesGrid() {
  useEffect (() => {
    fetch("/discover/movie", {
      headers: {}
    })
  })
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MoviesCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
