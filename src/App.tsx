import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import Home from './pages/Home'
import Project from './pages/Project'
import ParticleBackground from './components/ParticleBackground'
import AboutPage from './pages/About'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

function App() {
  return (
    <div className="min-h-screen bg-[#1f1f1f] text-[#d4d4d4]">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <ParticleBackground />
    </div>
  )
}

export default App
