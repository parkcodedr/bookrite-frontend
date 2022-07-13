import React, { useState } from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import './list.css';
import {useLocation} from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/Search/SearchItem';

function Hotels() {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [options, setOptions] = useState(location.state.options);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  
  console.log(location);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="list-container">
        <div className="list-wrapper">
          <div className="list-search">
          <h1 className="list-search-title">
            Search
          </h1>
          <div className="list-item">
            <label>Destination</label>
            <input type="text" value={destination} />
          </div>
          <div className="list-item">
            <label>Check-in Date</label>
            <span onClick={()=>setOpenDate((current)=>!current)}>
            {`${format(date[0].startDate,"MM/dd/yyyy")}  to  ${format(date[0].startDate,"MM/dd/yyyy")}`}
            </span>
            {openDate && (
              <DateRange 
              onChange={(item)=>setDate([item.selection])}
              minDate={new Date()}
              ranges={date}
              />
            )}
            
          </div>
              <section className='list-option-container'>
              <div className='list-item'>
            <label className='options-label'>Options</label>
          <div className='list-option-item'>
            <span className="list-option-text">Min Price <small>per night</small></span>
            <input type="number"  min={1} />
          </div>
          <div className='list-option-item'>
            <span className="list-option-text">Max Price <small>per night</small></span>
            <input type="number" min={1} className="list-option-input" />
          </div>
          <div className='list-option-item'>
            <span className="list-option-text">Adults</span>
            <input type="number" placeholder={options.adult} min={1} className="list-option-input" />
          </div>
          <div className='list-option-item'>
            <span className="list-option-text">Children</span>
            <input type="number" placeholder={options.children} min={0} />
          </div>
          <div className='list-option-item'>
            <span className="list-option-text">Room</span>
            <input type="number" placeholder={options.room} min={1} />
          </div>
          </div>

              </section>
              
              <button className='search-button'>Search</button>
          </div>
          <div className="list-result">
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hotels