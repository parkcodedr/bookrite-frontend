import React from 'react'
import './home.css';
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Featured from '../../components/featured/Featured'

function Home() {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className='home-container'>
    <Featured />
    <h1 className='home-title'>Browse by property type</h1>
      </div>
    </div>
  )
}

export default Home