import React from 'react'
import './propertyList.css';

function PropertyList() {
  return (
    <div className='property-list'>
      <div className='property-item'>
        <img src='/images/property/hotel1.jpg' alt='city1' className='property-image' />
        <div className='property-title'>
          <h1>Hotels</h1>
          <h4>1,143 Hotels</h4>
        </div>
      </div>
      <div className='property-item'>
        <img src='/images/property/apartment.jpg' alt='city2' className='property-image' />
        <div className='property-title'>
          <h1>Apartments</h1>
          <h4>19,902 Apartments</h4>
        </div>
      </div>
      <div className='property-item'>
        <img src='/images/property/resort3.jpg' alt='city3' className='property-image' />
        <div className='property-title'>
          <h1>Resorts</h1>
          <h4>54,903 Resorts</h4>
        </div>
      </div>
      <div className='property-item'>
        <img src='/images/property/villas1.jpg' alt='city3' className='property-image' />
        <div className='property-title'>
          <h1>Villas</h1>
          <h4>89,234 Villas</h4>
        </div>
      </div>
      <div className='property-item'>
        <img src='/images/property/cabins.jpg' alt='city3' className='property-image' />
        <div className='property-title'>
          <h1>Cabins</h1>
          <h4>29,131 Cabins</h4>
        </div>
      </div>
    </div>
  )
}

export default PropertyList