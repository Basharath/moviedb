import Head from 'next/head';
import TitleBar from './TitleBar';
import favicon from '../images/favicon.ico';

export default function Layout({ children, onSearch }) {
  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'
          integrity='sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=='
          crossOrigin='anonymous'
        />
        <link rel='shortcut icon' type='image/x-icon' href={favicon.src} />

        {/* Primary taga */}
        <title>MovieDB - Get details for any movie</title>
        <meta name='title' content='MovieDB - Get details for any movie' />
        <meta
          name='description'
          content='MovieDB is a place to find info about any movie you want'
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://moviedb-world.vercel.app/' />
        <meta
          property='og:title'
          content='MovieDB - Get details for any movie'
        />
        <meta
          property='og:description'
          content='MovieDB is a place to find info about any movie you want'
        />
        <meta
          property='og:image'
          content='https://i.postimg.cc/QMHf1T8n/moviedb.png'
        />

        {/* <!-- Twitter --> */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://moviedb-world.vercel.app/'
        />
        <meta
          property='twitter:title'
          content='MovieDB - Get details for any movie'
        />
        <meta
          property='twitter:description'
          content='MovieDB is a place to find info about any movie you want'
        />
        <meta
          property='twitter:image'
          content='https://i.postimg.cc/QMHf1T8n/moviedb.png'
        />
      </Head>
      <main>
        <TitleBar onSearch={onSearch} />
        {children}
      </main>
    </>
  );
}
