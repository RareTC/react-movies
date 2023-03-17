import "./styles.css";
import { useState } from "react";
// import ActorListPage from './ActorListPage';
import LoginPage from "./LoginPage";
// import MovieDetailPage from './MovieDetailPage';
// import MoviesListPage from './MoviesListPage';
// import NavBar from './NavBar';

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <h1> TESTING </h1>
      <LoginPage />
      {/* <MoviesListPage />
      <MovieDetailPage />
      <ActorListPage />
      <NavBar /> */}
    </div>
  );
}
