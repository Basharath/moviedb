import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
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

  // debounce function
  const debounce = (callback, delay) => {
    let timeOut;
    return (...args) => {
      if (timeOut) clearTimeout(timeOut);
      timeOut = setTimeout(() => callback(...args), delay);
    };
  };

  const debounceHandler = useCallback(debounce(changeRoute, 700), []);

  useEffect(() => {
    const query = router.query.q;
    if(query) setSearch(query);
  }, []);

  useEffect(() => {
    debounceHandler(search);
  }, [search]);


  const handleChange = ({ currentTarget: { value } }) => setSearch(() => value);

  return (
    <>
      <div className='titlebar'>
        <Image
          src={logo}
          alt='movie-db'
          className='logo'
          width={152}
          height={40}
          onClick={() => setSearch('')}
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
