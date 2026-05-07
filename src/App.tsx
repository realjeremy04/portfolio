import { Route, Routes } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import Home from './pages/Home'
import Project from './pages/Project'
import ParticleBackground from './components/ParticleBackground'
import AboutPage from './pages/About'

function App() {
  return (
    <div className="min-h-screen bg-[#1f1f1f] text-[#d4d4d4]">
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
