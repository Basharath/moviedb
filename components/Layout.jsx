import Head from 'next/head';
import TitleBar from './TitleBar';
import favicon from '../images/favicon.ico';

export default function Layout({ children, onSearch }) {
  return (
    <>
      <Head>
        <title>MovieDB - Get details for any movie</title>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'
          integrity='sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=='
          crossOrigin='anonymous'
        />
        <link rel='shortcut icon' type='image/x-icon' href={favicon.src} />
      </Head>
      <main>
        <TitleBar onSearch={onSearch} />
        {children}
      </main>
    </>
  );
}
