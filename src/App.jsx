import { Routes, Route, useLocation } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import Publications from './pages/Publications'
import Resume from './pages/Resume'
import SciFrTools from './pages/SciFrTools'
import BlitsfrPage from './pages/scifr/BlitsfrPage'
import MetaxsfrPage from './pages/scifr/MetaxsfrPage'
import PcoasfrPage from './pages/scifr/PcoasfrPage'
import CreatePage from './pages/scifr/CreatePage'
import './styles/App.css'

function App() {
  const location = useLocation()
  const isScifrPage = location.pathname.startsWith('/scifr') || 
                     location.pathname.startsWith('/blitsfr') || 
                     location.pathname.startsWith('/metaxsfr') || 
                     location.pathname.startsWith('/pcoasfr') || 
                     location.pathname.startsWith('/create-scifr')

  return (
    <div className="min-h-screen bg-base-100 flex flex-col">
      <Navigation />
      <main className={`flex-1 ${isScifrPage ? 'w-full' : 'container mx-auto px-4 py-8 max-w-6xl'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/scifr" element={<SciFrTools />} />
          <Route path="/blitsfr" element={<BlitsfrPage />} />
          <Route path="/metaxsfr" element={<MetaxsfrPage />} />
          <Route path="/pcoasfr" element={<PcoasfrPage />} />
          <Route path="/create-scifr" element={<CreatePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App