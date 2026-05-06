import { Route, Routes, useLocation } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { LenisScroll } from './components/LenisScroll'
import { navLinks } from './data/portfolio'
import Home from './pages/Home'
import Project from './pages/Project'

function App() {
  const { pathname } = useLocation()
  const isHomeRoute = pathname === '/'

  return (
    <div className="min-h-screen bg-[#1f1f1f] text-[#d4d4d4]">
      {!isHomeRoute ? <Navbar links={navLinks} /> : null}
      <LenisScroll />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </div>
  )
}

export default App
