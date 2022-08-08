import styles from './App.module.css';

import { MoviesGrid } from "./moviesgrid.jsx";

export function App() {
  return (
    <div>
      <header>
        <h1 className={styles.title}>Pelis</h1>
      </header>
      <main>
        <MoviesGrid />
      </main>
    </div>
  );
}
