import Image from 'next/image';
import logo from '../images/logo.svg';

export default function Headers({ onSearch }) {
  const handleChange = ({ currentTarget }) => {
    onSearch(currentTarget.value);
  };

  return (
    <>
      <div className='titlebar'>
        <Image
          src={logo}
          alt='TimeScale'
          className='logo'
          width={152}
          height={40}
        />
        <div className='search'>
          <i className='fa fa-search' />
          <input
            type='search'
            onChange={handleChange}
            className='searchbox'
            placeholder='Search for a movie'
          />
        </div>
      </div>
      <div className='hr' />
      {/* <hr /> */}
    </>
  );
}
