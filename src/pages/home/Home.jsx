import React from 'react'
import './home.css';
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Featured from '../../components/featured/Featured'
import PropertyList from '../../components/propertyList/PropertyList';
import TopProperty from '../../components/topProperty/TopProperty';
import MailList from '../../components/mailList/MailList';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className='home-container'>
    <Featured />
    <h1 className='home-title'>Browse by property type</h1>
    <PropertyList />
    <h1 className='home-title'>Homes Guests Love</h1>
    <TopProperty />
    <MailList />
    <section className='bottom-menu'>
      <button className='bottom-menu-button'>List your property</button>
      <ul className='bottom-menu-list'>
        <li><Link to={'#'}>Mobile Version</Link></li>
        <li><Link to={'/account'}>Your Account</Link></li>
        <li><Link to={'#'}>Make changes online to your booking</Link></li>
        <li><Link to={'#'}>Customer service help</Link></li>
        <li><Link to={'#'}>Become an affiliate</Link></li>
        <li><Link to={'#'}>Bookrite.ng for business</Link></li>
      </ul>
    </section>
    <Footer />
      </div>
    </div>
  )
}

export default Home