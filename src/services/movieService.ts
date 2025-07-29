import { Movie } from "../types/movie";
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export async function fetchMovies(query: string): Promise<Movie[]> {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      query,
      include_adult: false,
      page: 1,
    },
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  return response.data.results;
}
