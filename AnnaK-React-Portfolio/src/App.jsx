import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Aboutme from './pages/Aboutme'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import './App.css'
function App() {
  const [currentPage, setCurrentPage] = useState('About me')

  function showCurrentPage() {
    if (currentPage === 'About me') {
      return <Aboutme />
    } else if (currentPage === 'Portfolio') {
      return <Portfolio />
    } else if (currentPage === 'Contact') {
      return <Contact />
    } else if (currentPage === 'Resume') {
      return <Resume />
    }
  }

  return (
    <div className="App">
      <Header setCurrentPage={setCurrentPage} />
      {showCurrentPage()}
      <Footer />
    </div>
  )
}


export default App
