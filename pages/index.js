import Head from 'next/head'
import Header from '@components/Header'
import Logo from '@components/Logo'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Uzen Resaurant</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Uzen" />
        <p className="description">
          Japanese Cuisine
        </p>
      </main>

    </div>
  )
}
