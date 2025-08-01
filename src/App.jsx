// --> import components
import HeroSection from "./components/HeroSection"
import FavoriteList from './components/FavoritesList'
import Footer from './components/Footer'
import DisplayController from './components/DisplayController'
import LoadingProgress from "./components/LoadingProgress"

function App() {

  return (
    <>
      <LoadingProgress />
      <div className="relative w-full mx-auto min-h-screen px-2 py-2 lg:py-4 lg:px-4 flex flex-col justify-center items-center">
        {/* will be display only if isOpen === true */}
        <FavoriteList />
        <HeroSection />
        <DisplayController />
        <Footer />
      </div>
    </>
  )
}

export default App
