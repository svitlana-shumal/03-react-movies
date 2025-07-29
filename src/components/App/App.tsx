import { useState } from "react";
import "../App/App.css";
import { fetchMovies } from "../../services/movieService";
import SearchBar from "../SearchBar/SearchBar";
import toast from "react-hot-toast";
import { Movie } from "../../types/movie";
import MovieGrid from "../MovieGrid/MovieGrid";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import MovieModal from "../MovieModal/MovieModal";

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isMovieModalOpen, setIsMovieModalOpen] = useState(false);

  const openModal = () => setIsMovieModalOpen(true);

  const closeModal = () => setIsMovieModalOpen(false);

  const handleSelectMovie = (movie: Movie) => {
    console.log("Selected movie:", movie);
  };

  const handleSubmit = async (query: string) => {
    setMovies([]);
    setIsLoading(false);
    setHasError(false);
    try {
      const fetchedMovies = await fetchMovies(query);
      if (fetchedMovies.length === 0) {
        toast.error("No movies found for your request.");
        return;
      }
      setMovies(fetchedMovies);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {hasError && <ErrorMessage />}
      {!isLoading && !hasError && movies.length > 0 && (
        <MovieGrid onSelect={handleSelectMovie} movies={movies} />
      )}
      <MovieModal />
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </>
  );
}
