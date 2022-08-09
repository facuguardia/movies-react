import styles from './App.module.css';
import { MoviesGrid } from "./components/MoviesGrid";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export function App() {
  return (
    <Router>
      <header>
        <h1 className={styles.title}>Movies</h1>
      </header>
      <main>
      <Switch>
          <Route path="/movie">Movie</Route>
          <Route path="/">Home</Route>
      </Switch>
      </main>
    </Router>
  );
}
