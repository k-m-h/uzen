
// import Logo from '@components/Logo'
import Footer from '@components/Footer'
import Hours from '@components/Hours'
import Topbar from '@components/Topbar'

export default function Home() {
  return (
    <div className="container">
    <Topbar/>
      <main>
      <section>
        <Hours
          dineIn={false}
          takeOut={true}
        />
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
