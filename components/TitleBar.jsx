import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import logo from '../images/logo.svg';

export default function Headers() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleChange = ({ currentTarget }) => {
    const text = currentTarget.value.toString().replaceAll(' ', '+');
    setSearch(() => currentTarget.value);
    if (!text) router.push('/');
    else router.push(`/search?q=${text}`);
  };
  const handleClick = () => {
    setSearch('');
    router.push('/');
  };

  return (
    <>
      <div className='titlebar'>
        <Image
          src={logo}
          alt='movie-db'
          className='logo'
          width={152}
          height={40}
          onClick={handleClick}
        />
        <div className='search'>
          <i className='fa fa-search' />
          <input
            type='search'
            onChange={handleChange}
            className='searchbox'
            placeholder='Search for a movie'
            value={search}
          />
        </div>
      </div>
      <div className='hr' />
      {/* <hr /> */}
    </>
  );
}
