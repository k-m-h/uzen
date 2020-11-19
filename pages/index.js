import Head from 'next/head'
import Header from '@components/Header'
// import Logo from '@components/Logo'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">

      <Head>
        <title>Uzen Resaurant</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <Header
        title="Uzen"
        subTitle="Japanese Cuisine"
      />
      <section>
        <div className="hours">
          <h4>Take-out Hours</h4>
          <p><span>Monday</span>	<span>11:00AM – 2:00PM, 5:00PM – 8:000PM</span></p>
          <p><span>Tuesday</span>	<span>11:00AM – 2:00PM, 5:00PM – 8:000PM</span></p>
          <p><span>Wednesday</span>	<span>11:00AM – 2:00PM, 5:00PM – 8:000PM</span></p>
          <p><span>Thursday</span>	<span>11:00AM – 2:00PM, 5:00PM – 8:000PM</span></p>
          <p><span>Saturday</span>	<span>5:30–10PM</span></p>
          <p><span>Sunday</span>	<span>Closed</span></p>
        </div>
        <div>
          <h4>Dine-in Hours</h4>
          <span>Currently Unavailable</span>
        </div>
        <div className="holidays">
          <h4>Upcoming Holiday Closures</h4>
          <p>Thanksgiving Day Thurs 11/26</p>
          <p>Christmas Eve and Day Thurs 12/24- Sun 12/27</p>
          <p>New Years Eve and Day Thurs 12/31- Sun 1/3 </p>
        </div>
      </section>

      <section>
        <div className="message">
          <h4>Thank you for your continued support!</h4>
        </div>
      </section>
      </main>

      <Footer/>
    </div>
  )
}
