
// import './App.css'
import BannerSection from './Pages/BannerSection/BannerSection'
import Blogs from './Pages/BlogSection/Blogs'
import Choose from './Pages/ChooseSection/Choose'
import Management from './Pages/ManagementSection/Management'
import Navbar from './Pages/Navbar/Navbar'
import Rating from './Pages/RatingSection/Rating'
import Tools from './Pages/ToolsSection/Tools'

function App() {

	return (
		<div className='mx-44'>
			<Navbar></Navbar>
			<BannerSection></BannerSection>
			<Rating></Rating>
			<Management />
			<Choose></Choose>
			<Tools></Tools>
			<Blogs/>
		</div>

	)
}

export default App
