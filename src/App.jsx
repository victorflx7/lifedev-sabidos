
import './App.css'
import Navbar from './components/Navbar'
import  Footer  from './components/Footer'
import Home from './pages/Home/Home'

import { BrowserRouter, Routes, Route , Navigate } from 'react-router-dom';
import { AuthProvider } from './components/context/AuthContext';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import About from './pages/About/About';
import Post from './pages/Post/Post';
import CreatePost from './pages/CreatePost/CreatePost';
import EditPost from './pages/EditPost/EditPost.jsx';
import { useState, useEffect } from 'react';
import './App.css'
import { useAuthentication } from './hooks/useAuthentication.jsx';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const [user, setUser] = useState(undefined)
  const { Auth } = useAuthentication()
  const loading = user === undefined
  useEffect(() => {
    onAuthStateChanged(Auth, (user) => {
      setUser(user)
    })
  }, { Auth })


  return (
    <>

      <div>
        <AuthProvider value={{user}}>
          <BrowserRouter>
            <Navbar />
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={!user ? <Login /> : <Navigate to="/"/>} />
                <Route path="/register" element={!user ? <Register /> : <Navigate to="/"/>} />
                <Route path="/about" element={<About />} />
                <Route path="/dashboard" element={ user ? <Dashboard /> : <Navigate to="/login"/>} />
                <Route path="/posts/:id" element={<Post />} />
                <Route path="/posts/create" element={ user ? <CreatePost /> : <Navigate to="/login"/>} />
                <Route path="/posts/edit/:id" element={ user ? <EditPost /> : <Navigate to="/login"/>} />
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
