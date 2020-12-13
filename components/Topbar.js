import styles from './Topbar.module.css'
import Head from 'next/head'
import Header from '@components/Header'
import Nav from '@components/Nav'

export default function Topbar() {
  return (
    <>
      <Head>
        <title>Uzen Resaurant</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@650;700;800&display=swap" rel="stylesheet"/>
      </Head>
      <Header
        title="Uzen"
        subTitle="Japanese Cuisine"
      />
      <Nav/>
    </>
  );
}
