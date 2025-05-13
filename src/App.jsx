
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { onAuthStateChanged } from 'firebase/auth'
import Home from './pages/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/context/AuthContext';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import './App.css'
import { useState, useEffect } from 'react'
import { useAuthentication } from './hooks/useAuthentication'


function App() {
  const [user, setUser] = useState(undefined)
  const { Auth } = useAuthentication()
  const loading = user === undefined
  useEffect(() => {
    onAuthStateChanged(Auth, (user) => {
      setUser(user)
    })
  }, { Auth })

  if (loadingUser) {
    return <p>Carregando</p>
  }
  return (
    <>
      <div>
        <AuthProvider value={user}>
          <BrowserRouter>
            <Navbar />
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </div>
            <Footer />
          </BrowserRouter>
        </AuthProvider>
      </div>
    </>
  )
}

export default App
