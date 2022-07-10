import './header.css'
import { FaBed,FaCar,FaTaxi} from 'react-icons/fa';
import { IoIosAirplane} from 'react-icons/io';
import { MdAttractions} from 'react-icons/md';


function Header() {
  return (
    <div className='header'>
        <div className='header-container'>
        <div className='header-list'>
            <div className='header-item active'>
                <FaBed /><span>Stays</span>
            </div>
            <div className='header-item'>
                <IoIosAirplane /><span>Flight</span>
            </div>
            <div className='header-item'>
                <FaCar /><span>Cars</span>
            </div>
            <div className='header-item'>
                <MdAttractions /><span>Attractions</span>
            </div>
            <div className='header-item'>
                <FaTaxi /><span>Airport Taxi</span>
            </div>
            
        </div>

        <h1 className="header-title">
        Find your next stay
        </h1>
        <p className='header-description'>Search deals on hotels, homes, and much more...</p>
        <button className='header-button'>Sign / Register</button>
        </div>
        
    </div>
  )
}

export default Header