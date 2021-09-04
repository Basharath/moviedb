/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import dayjs from 'dayjs';
import Image from 'next/image';
import close from '../images/close-icon.svg';

export default function Modal({ movie, onClose }) {
  const {
    title,
    image_path,
    release_date,
    overview,
    vote_average,
    vote_count,
  } = movie;

  const handleClick = (e) => {
    if (e.target.classList.contains('modal-screen')) onClose();
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div className='modal-screen' onClick={handleClick}>
      <div className='modal'>
        <div onClick={() => onClose()} className='close'>
          <Image src={close} alt='closeIcon' width={24} height={24} />
        </div>
        <h3 className='h3'>{title}</h3>
        <div className='container'>
          <img src={image_path} alt={title} layout='responsive' />
          <div className='details'>
            <p>
              <span className='bold'>Release date:</span>{' '}
              {dayjs(release_date).format('MMMM DD, YYYY')}
            </p>
            <p>{overview}</p>
            <p>
              <span className='bold'>{vote_average}</span> / 10 ({vote_count}{' '}
              total votes)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
