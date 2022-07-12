import React from 'react'
import './featured.css';
function Featured() {
  return (
    <div className='featured'>
      <div className='featured-item'>
        <img src='/images/city/city2.jpg' alt='city1' className='featured-image' />
        <div className='featured-title'>
          <h1>Abuja</h1>
          <h4>143 Property</h4>
        </div>
      </div>
      <div className='featured-item'>
        <img src='/images/city/city3.jpg' alt='city2' className='featured-image' />
        <div className='featured-title'>
          <h1>Lagos</h1>
          <h4>192 Property</h4>
        </div>
      </div>
      <div className='featured-item'>
        <img src='/images/city/city10.jpg' alt='city3' className='featured-image' />
        <div className='featured-title'>
          <h1>Portharcut</h1>
          <h4>543 Property</h4>
        </div>
      </div>
    </div>
  )
}

export default Featured