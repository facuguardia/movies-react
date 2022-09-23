import styles from "./App.module.css";
// libreria de react-router-dom, manejamos el arbol de dependencias de nuestra aplicacion
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";

export function App() {
  return (
    // sintaxis de jsx
    <Router>
      <header>
        <Link to="/">
          <h1 className={styles.title}>Movies</h1>
        </Link>
      </header>
      <main>
        <Switch>
          <Route exact path="/movie/:movieId">
            <MovieDetails />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </main>
    </Router>
    // router es un alias de BrowserRouter
    // con switch se pueden manejar multiples rutas
  );
}
