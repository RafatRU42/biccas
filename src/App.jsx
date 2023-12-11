
// import './App.css'
import BannerSection from './Pages/BannerSection/BannerSection'
import Choose from './Pages/ChooseSection/Choose'
import Management from './Pages/ManagementSection/Management'
import Navbar from './Pages/Navbar/Navbar'
import Rating from './Pages/RatingSection/Rating'
import Tools from './Pages/ToolsSection/Tools'

function App() {

	return (
		<div className=''>
			<Navbar></Navbar>
			<BannerSection></BannerSection>
			<Rating></Rating>
			<Management />
			<Choose></Choose>
			<Tools></Tools>
		</div>

	)
}

export default App
