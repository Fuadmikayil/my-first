import React from 'react'
import Main from './Companents/Main/Main'
import Header from './Companents/Header/Header'
import Footer from './Companents/Footer/Footer'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import About from './Companents/About/About'
import Work from './Companents/Work/Work'
import AllWorks from './Companents/Work/AllWorks'
import Ipoteka from './Companents/Ipoteka/Iphoteka'
import PersonInfo from './Companents/Personİnfo/person'

const App = () => {
  return (
    <section className='main-section'>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/work' element={<Work />} />
        <Route path='/all-works' element={<AllWorks />} />
        <Route path='/ipoteka-shexsi-melumatlar' element={<Ipoteka />} />
        <Route path='/shexsi-melumatlar' element={<PersonInfo />} />
      </Routes>
      <Footer />
    </section>
  )
}

export default App