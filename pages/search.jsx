import MovieGrid from '../components/MovieGrid';
import { searchMovies } from '../httpService';

export default function Search({ movies, query }) {
  return <MovieGrid movies={movies} title={`Search results for: ${query}`} />;
}

export const getServerSideProps = async ({ query }) => {
  const searchText = query.q;
  const movies = await searchMovies(searchText);

  return {
    props: { movies, query: searchText },
  };
};
