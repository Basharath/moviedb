import MovieGrid from '../components/MovieGrid';
import { getMovies } from '../httpService';

export default function Home({ movies }) {
  return <MovieGrid movies={movies} />;
}

export const getStaticProps = async () => {
  const allMovies = await getMovies();

  return {
    props: { movies: allMovies },
    revalidate: 86400,
  };
};
