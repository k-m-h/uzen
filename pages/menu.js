import Footer from '@components/Footer'
import Topbar from '@components/Topbar'

export default function Menu() {
  return (
    <div className="container">
    <Topbar/>
      <main>
      <section>
        <ul>
          <li>
            <h4><a href="/UzenSushiSpecialsMenu.pdf">Sushi/Specials</a></h4>
          </li>
          <li>
            <h4><a href="/UzenLunchMenu.pdf">Lunch</a></h4>
          </li>
          <li>
            <h4><a href="/UzenDinnerMenu.pdf">Dinner</a></h4>
          </li>
        </ul>
      </section>
      </main>
      <Footer/>
    </div>
  )
}
