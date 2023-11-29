import './App.css'
import Navbar from './Components/Navbar'
import Booking from './Sections/Booking'
import Companies from './Sections/Companies'
import Contact from './Sections/Contact'
import Credit from './Sections/Credit'
import Footer from './Sections/Footer'
import Hero from './Sections/Hero'
import Services from './Sections/Services'
import TopSelling from './Sections/TopSelling'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <TopSelling/>
      <Booking/>
      <Services/>
      <Companies/>
      <Contact/>
      <Footer/>
      <Credit/>
    </>
  )
}

export default App
