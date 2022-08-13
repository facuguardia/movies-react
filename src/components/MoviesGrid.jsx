import { MoviesCard } from "./MovieCard";
import styles from "./MovieGrid.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/discover/movie", {
      headers: {
        Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3YjY3ZWVlMWVhOGI4MTY0YSIsInN1YiI6IjVlM2ExNmU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0760tssAAaSppyjRv9anArs",
      "Content-Type": "application/json;charset=utf-8",
      },
  })
  .then((res) => res.json())
  .then((data) => {
    setMovies(data.results);
  });
  }, []);
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MoviesCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
