import { SearchOutlined } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Movie from "./Movie";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=2311f9e";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");

  useEffect(() => {
    const fetchMovies = async (searchMovie = "") => {
      const { data } = await axios.get(`${API_URL}&s="Batman"`);
      setMovies(data.Search);
    };
    fetchMovies();

    console.log(movies);
  }, []);

  useEffect(() => {
    const fetchMovies = async (searchMovie = "") => {
      const { data } = await axios.get(`${API_URL}&s=${searchMovie}`);
      setMovies(data.Search);
    };
    fetchMovies(searchMovie);
    console.log("movies", movies);
  }, [searchMovie]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="title">Movie Aspire</div>
        <div className="searchInput">
          <input
            className="movieInput"
            type="text"
            value={searchMovie}
            onChange={(e) => setSearchMovie(e.target.value)}
            placeholder="Movie Name Here..."
          />
          <SearchOutlined fontSize="large" />
        </div>
        <div className="movieContainer">
          {movies?.map((movie) => (
            <Movie key={movie.imdbID} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
