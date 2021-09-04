import { useState, useEffect } from 'react';
import Movies from '../components/Movies';
import TitleBar from '../components/TitleBar';
import Modal from '../components/Modal';

import { getMovies, searchMovies } from '../httpService';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovies()
      .then((m) => setMovies(m))
      // eslint-disable-next-line no-console
      .catch((e) => console.log(e));
  }, []);

  const handleSearch = async (searchText) => {
    const movieList = await searchMovies(searchText);
    setMovies(movieList);
  };

  const handleClick = (m) => {
    setMovie(m);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <main>
      <TitleBar onSearch={handleSearch} />
      <Movies movies={movies} onCardClick={handleClick} />
      {showModal && <Modal onClose={handleClose} movie={movie} />}
    </main>
  );
};

export default App;
