import { Routes, Route } from 'react-router-dom'
import ScifrLanding from './scifr/ScifrLanding'
import BlitsfrPage from './scifr/BlitsfrPage'
import MetaxsfrPage from './scifr/MetaxsfrPage'
import PcoasfrPage from './scifr/PcoasfrPage'
import CreatePage from './scifr/CreatePage'

function SciFrTools() {
  return (
    <Routes>
      <Route path="/" element={<ScifrLanding />} />
      <Route path="/blitsfr" element={<BlitsfrPage />} />
      <Route path="/metaxsfr" element={<MetaxsfrPage />} />
      <Route path="/pcoasfr" element={<PcoasfrPage />} />
      <Route path="/create" element={<CreatePage />} />
    </Routes>
  )
}

export default SciFrTools