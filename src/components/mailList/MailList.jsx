import React from 'react'
import './mailList.css'

function MailList() {
  return (
    <div className='mail-list'>
        <h1 className="mail-list-title">Save time, save money!</h1>
        <span className="mail-list-description">
        Sign up and we'll send the best deals to you
        </span>
        <div className="mail-list-input-container">
            <input className='mail-list-input' placeholder='Your Email' />
            <button className='mail-list-button'>Subscribe</button>
        </div>

    </div>
  )
}

export default MailList