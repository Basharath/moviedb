import { useState } from 'react';
import Movies from './Movies';
import Modal from './Modal';

export default function Home({ movies, title }) {
  const [showModal, setShowModal] = useState(false);
  const [movie, setMovie] = useState({});

  const handleClick = (m) => {
    setMovie(m);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <Movies movies={movies} title={title} onCardClick={handleClick} />
      {showModal && <Modal onClose={handleClose} movie={movie} />}
    </>
  );
}
