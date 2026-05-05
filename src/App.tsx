import { Route, Routes } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { LenisScroll } from './components/LenisScroll'
import { navLinks } from './data/portfolio'
import Home from './pages/Home'
import Project from './pages/Project'

function App() {
  return (
    <div className="min-h-screen bg-[#1f1f1f] text-[#d4d4d4]">
      <Navbar links={navLinks} />
      <LenisScroll />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </div>
  )
}

export default App
