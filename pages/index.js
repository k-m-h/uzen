
// import Logo from '@components/Logo'
import Footer from '@components/Footer'
import Hours from '@components/Hours'
import Topbar from '@components/Topbar'
import Holidays from '@components/Holidays'

export default function Home() {
  return (
    <div className="container">
    <Topbar/>
      <main>
      <section>
        <Hours
          dineIn={true}
          takeOut={true}
        />
        <Holidays
          display={false}
        />
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
