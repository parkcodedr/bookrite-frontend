import React from 'react'
import './searchItem.css';
function SearchItem() {
  return (
    <div className='search-item'>
        <img src='/images/property/hotel1.jpg' alt='search-item'
        className='search-image' />
        <div className='search-item-description'>
            <h1 className='search-item-title'>Comfort Zone Apartments</h1>
            <span className="search-item-distance">600km from Center</span>
            <span className="search-item-taxi-option">Free Airport Taxi</span>
            <span className="search-item-sub-title">Studio with Air Conditions</span>
            <span className="search-item-feature">Entire Stuio - Bedroom 2 - 1 full bed</span>
            <span className="search-item-cancel-option">Free Cancellation</span>
            <span className="search-item-cancel-sub-title">
                You can cancel later, so lock in this great price today!
            </span>
        </div>
        <div className='search-item-detail'>
            <div className='search-item-rating'>
                <span>Excellent</span>
                <button>8.7</button>
            </div>
            <div className="search-item-text">
                <span className='search-item-price'>$450</span>
                <span className='search-item-tax-option'>Include Taxi and fees</span>
                <button className='search-item-detail-button'>See Availability</button>
            </div>
        </div>

    </div>
  )
}

export default SearchItem