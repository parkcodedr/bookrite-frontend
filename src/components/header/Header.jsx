import {useState} from 'react'
import './header.css'
import { FaBed,FaCalendarDay,FaCar,FaTaxi, FaUser} from 'react-icons/fa';
import { IoIosAirplane} from 'react-icons/io';
import { MdAttractions} from 'react-icons/md';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';


function Header({type}) {
    const [openOption, setOpenOption] = useState(false);
    const [dateOpen, setDateOpen] = useState(false)
    const [options, setOptions] = useState({
        adult:1,
        children:0,
        room:1
    })
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

      const handleOptions = (name,operation)=>{
        setOptions((prev)=>{
            return {
                ...prev,[name]:operation==='i'? options[name] +1 :options[name] - 1
            }
        })
      }

  return (
    <div className='header'>
        <div className={type==="list"? 'header-container list-mode' : 'header-container'}>
        <div className='header-list'>
            <div className='header-item active'>
                <FaBed /><span>Stays</span>
            </div>
            <div className='header-item'>
                <IoIosAirplane /><span>Flight</span>
            </div>
            <div className='header-item'>
                <FaCar /><span>Car rentals</span>
            </div>
            <div className='header-item'>
                <MdAttractions /><span>Attractions</span>
            </div>
            <div className='header-item'>
                <FaTaxi /><span>Airport Taxi</span>
            </div>
            
        </div>

        {
            type!=="list" && (
                <div className='header-title-container'>
        <h1 className="header-title">
        Find your next stay
        </h1>
        <p className='header-description'>Search deals on hotels, homes, and much more...</p>
        <button className='header-button'>Sign / Register</button>
        

        <div className='header-search'>
            <div className='header-search-item'>
                <FaBed className='header-icon' />
                <input type="text" placeholder="Where are you going?" 
                className="header-search-input" />
            </div>
            <div className='header-search-item'>
                <FaCalendarDay className='header-icon' />
                <span className='header-search-text' 
                onClick={()=>setDateOpen((current)=>!current)}
        
                >
                    {`${format(date[0].startDate,"MM/dd/yyyy")}  to  ${format(date[0].startDate,"MM/dd/yyyy")}`}</span>
                {dateOpen && (
                    <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    />
                )}
            </div>

            <div className='header-search-item'>
                <FaUser className='header-icon' />
                <span className='header-search-text'
                onClick={()=>setOpenOption(prev=>!prev)}
                >{`${options.adult} Adult . ${options.children} Children ${options.room} Room`}</span>
            {openOption && (
                <div className='options'>
                <div className='option-item'>
                    <span className='option-text'>Adult</span>
                    <div className='option-counter'>
                    <button className='option-count-button' 
                    disabled={options.adult<=1}
                    onClick={()=>handleOptions("adult","d")}>-</button>
                    <span className="option-count-number">{options.adult}</span>
                    <button className='option-count-button' 
                    onClick={()=>handleOptions("adult","i")}>+</button>
                    </div>
                </div>
                <div className='option-item'>
                    <span className='option-text'>Children</span>
                    <div className='option-counter'>
                    <button className='option-count-button' 
                    disabled={options.children<=0}
                    onClick={()=>handleOptions("children","d")}>-</button>
                    <span className="option-count-number">{options.children}</span>
                    <button className='option-count-button'
                     onClick={()=>handleOptions("children","i")}>+</button>
                    </div>
                </div>
                <div className='option-item'>
                    <span className='option-text'>Room</span>
                    <div className='option-counter'>
                    <button className='option-count-button' 
                    disabled={options.room<=1}
                    onClick={()=>handleOptions("room","d")}>-</button>
                    <span className="option-count-number">{options.room}</span>
                    <button className='option-count-button' 
                    onClick={()=>handleOptions("room","i")}>+</button>
                    </div>
                </div>
            </div>
            )}
            </div>
            <div className='header-search-item'>
               <button className='header-button'>Search</button>
            </div>
        </div>
        </div>
        
            )
        }


        </div>
        
    </div>
  )
}

export default Header