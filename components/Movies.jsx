/* eslint-disable react/no-array-index-key */
import Card from './Card';

const Movies = ({ movies, onCardClick }) => {
  const baseImageUrl = process.env.NEXT_PUBLIC_API_BASE_IMAGE_URL;
  const fallBackImageUrl =
    'https://www.peakndt.com/wp-content/uploads/2017/02/No_picture_available.png';

  return (
    <>
      <h2 className='h2'>Most Recent Movies</h2>
      {movies.length < 1 && (
        <p className='no-movies'>No movies are found. Try searching again.</p>
      )}
      <div className='movie-grid'>
        {movies.map((m, idx) => {
          const imagepath = m.poster_path
            ? baseImageUrl + m.poster_path
            : fallBackImageUrl;

          // eslint-disable-next-line no-param-reassign
          m.image_path = imagepath;
          return <Card key={idx} onCardClick={onCardClick} movie={m} />;
        })}
      </div>
    </>
  );
};

export default Movies;
