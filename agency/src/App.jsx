import AboutUs from './components/AboutUs'
import Header from './components/Header'
import Services from './components/Services'
import image from './images/about.png'

function App() {
  return (
    <>
      <Header />
      <AboutUs imagePath={image} />
      <Services />
    </>
  )
}

export default App
