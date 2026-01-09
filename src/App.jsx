import { Routes, Route, useLocation } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Tutors } from './pages/Tutors'
import { Blog } from './pages/Blog'
import { Contact } from './pages/Contact'
import { MyProfil } from './pages/MyProfil'
import { MySessions } from './pages/MySessions'
import { Sessions } from './pages/Sessions'
import { Verify } from './pages/Verify'
import { Login } from './pages/Login'
import { Footer } from './components/Footer'


function App() {
  const location = useLocation()
  const isLoginPage = location.pathname === '/login'

  return (
    <main className=' overflow-hidden bg-light text-tertiary font-primary'>
      {!isLoginPage && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutors" element={<Tutors />} />
        <Route path="/tutors/:subject" element={<Tutors />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-profile" element={<MyProfil />} />
        <Route path="/my-sessions" element={<MySessions />} />
        <Route path="/sessions/:tutId" element={<Sessions />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {!isLoginPage && <Footer />}
    </main>
  )
}

export default App