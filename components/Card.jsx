/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @next/next/no-img-element */
export default function Card({ movie, onCardClick }) {
  const { title, vote_average: rating, image_path: image } = movie;

  return (
    <div className='card' onClick={() => onCardClick(movie)}>
      <div className='rating'>{rating}</div>
      <img src={image} alt={title} />
      <div className='title'>{title}</div>
    </div>
  );
}
