import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import SingleRout from './pages/singleRout/SingleRout'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product/:id' element={<SingleRout/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
