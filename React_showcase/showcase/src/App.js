import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import About from './pages/About'
import Cheatsheet from './pages/Cheatsheet'

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cheatsheet" element={<Cheatsheet />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App