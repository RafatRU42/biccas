
import './App.css'
import BannerSection from './Pages/BannerSection/BannerSection'
import Choose from './Pages/ChooseSection/Choose'
import Management from './Pages/ManagementSection/Management'
import Navbar from './Pages/Navbar/Navbar'
import Rating from './Pages/RatingSection/Rating'

function App() {

  return (
    <>
	<Navbar></Navbar>
	<BannerSection></BannerSection>
	<Rating></Rating>
	<Management/>
	<Choose></Choose>
	

    </>
  )
}

export default App
