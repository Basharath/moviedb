import axios from 'axios';

const domain = process.env.NEXT_PUBLIC_API_DOMAIN;
const key = process.env.NEXT_PUBLIC_MOVIE_DB_API_KEY;
const apiUrl = `${domain}/movie/popular?api_key=${key}`;
const searchUrl = `${domain}/search/movie?api_key=${key}&query=`;

const getMovies = async () => {
  const res = await axios.get(apiUrl);
  const movieList = res.data.results;
  movieList.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));

  return movieList;
};

const searchMovies = async (searchText) => {
  const queryUrl = searchText ? searchUrl + searchText : apiUrl;
  const res = await axios.get(queryUrl);
  const movieList = res.data.results;

  return movieList;
};

export { getMovies, searchMovies };
