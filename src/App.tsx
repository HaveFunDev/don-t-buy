import { BrowserRouter } from 'react-router-dom'
import Sidebar from './components/filter/sidebar/Sidebar'
import Navbar from './components/layouts/navigation/Navbar'
import HeroImg from './components/layouts/heroImg/HeroImg'
import styles from './app.module.scss'
import { useEffect, useState } from 'react'
import Wrapper from './components/UI/Wrapper/Wrapper'
function App() {
	const [showSidebar, setShowSidebar] = useState(false)

	useEffect(() => {
		if (window.innerWidth > 768) {
			setShowSidebar(true)
		}
	}, [])

	const applyFilters = () => {
		if (window.innerWidth < 768) {
			setShowSidebar(false)
		}
	}
	return (
		<Wrapper>
		<Navbar />
			<BrowserRouter>
				{/* Please change it later to styles.container */}
				<div className='container'>
					<Sidebar showSidebar={showSidebar} applyFilters={applyFilters} />
					<button onClick={() => setShowSidebar(true)} className={styles['sort-btn']}>
						Sort and filter
					</button>
					{/* Content */}
					<HeroImg />
				</div>
			</BrowserRouter>
		</Wrapper>
	)
}

export default App
