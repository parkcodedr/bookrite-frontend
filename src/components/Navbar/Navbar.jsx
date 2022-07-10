import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-container'>
            <span className='logo'>Bookrite</span>
            <div className='navbar-item'>
                <button className='navbar-button'>Register</button>
                <button className='navbar-button'>Login</button>
            </div>
        </div>

    </div>
  )
}

export default Navbar