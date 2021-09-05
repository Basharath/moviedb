import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import debounce from 'lodash.debounce';
import Image from 'next/image';
import logo from '../images/logo.svg';

export default function Headers() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  // data gets passed from the debounce function
  const changeRoute = (data) => {
    const text = data.toString().trim().replaceAll(' ', '+');
    if (text) router.push(`/search?q=${text}`);
    else router.push('/');
  };

  const debounceHandler = useCallback(debounce(changeRoute, 700), []);

  useEffect(() => {
    debounceHandler(search);
  }, [search]);

  const handleChange = ({ currentTarget: { value } }) => setSearch(() => value);

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
