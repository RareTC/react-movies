import "./styles.css";
import { useState } from "react";
// import ActorListPage from './ActorListPage';
import LoginPage from "./pages/LoginPage/LoginPage";
// import MovieDetailPage from './MovieDetailPage';
// import MoviesListPage from './MoviesListPage';
// import NavBar from './NavBar';

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <h1> TESTING </h1>
      <LoginPage />
    </div>
  );
}
