import Head from 'next/head';
import MovieGrid from '../components/MovieGrid';
import { searchMovies } from '../httpService';

export default function Search({ movies, query }) {
  return (
    <>
      <Head>
        <title>MovieDB - searched: {query}</title>
      </Head>
      <MovieGrid movies={movies} title={`Search results for: ${query}`} />;
    </>
  );
}

export const getServerSideProps = async ({ query }) => {
  const searchText = query.q;
  const movies = await searchMovies(searchText);

  return {
    props: { movies, query: searchText },
  };
};
