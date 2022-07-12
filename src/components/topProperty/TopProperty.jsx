import React from 'react'

import './topProperty.css'

function TopProperty() {
  return (
    <div className='top-property'>
        <section className='top-property-item'>
            <img src='/images/property/villas4.jpg' className='top-property-image' alt='topproperty'/>
            <span className="top-property-name">Trascorp Hilton</span>
            <span className="top-property-city">Abuja</span>
            <span className="top-property-price">Starting from $804</span>
            <div className='top-property-rating'>
                <button className='property-rating-button'>8.6</button>
                <span>Excellent</span>
            </div>
        </section>
        <section className='top-property-item'>
            <img src='/images/property/hotel6.jpg' className='top-property-image'  alt='topproperty'/>
            <span className="top-property-name">Banana Villa</span>
            <span className="top-property-city">Lagos</span>
            <span className="top-property-price">Starting from $404</span>
            <div className='top-property-rating'>
                <button className='property-rating-button'>9.7</button>
                <span>Wonderful</span>
            </div>
        </section>
        <section className='top-property-item'>
            <img src='/images/property/apartment2.jpg' className='top-property-image'  alt='topproperty'/>
            <span className="top-property-name">Okwori Guest In</span>
            <span className="top-property-city">Lagos</span>
            <span className="top-property-price">Starting from $304</span>
            <div className='top-property-rating'>
                <button className='property-rating-button'>9.8</button>
                <span>Exceptional</span>
            </div>
        </section>
        <section className='top-property-item'>
            <img src='/images/property/apartment1.jpg' className='top-property-image'  alt='topproperty'/>
            <span className="top-property-name">Brains & Hammers Estate</span>
            <span className="top-property-city">Abuja</span>
            <span className="top-property-price">Starting from $604</span>
            <div className='top-property-rating'>
                <button className='property-rating-button'>9.6</button>
                <span>Excellent</span>
            </div>
        </section>

    </div>
  )
}

export default TopProperty