import { useState } from 'react'
import { NAV_ITEMS } from '../assets/constants'
import '../styles/Navbar.css'

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className='navbar'>
        <a href="#" className="nav__logo">Arturo</a>

        <div className={`nav__menu navbar-main ${showMenu ? 'show-menu' : ""}`}>
            <ul className="nav__list">
                {NAV_ITEMS.map(({item, svg}, index) => {
                    return(
                        <li className="nav__item nav__icon" key={`nav-item-${index}`} onClick={() => setShowMenu(false)}>
                            <a href="#" className="nav__link">
                                <i className={`bx bx-${svg}`}></i> {item}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>

        <div className="nav__toggle" onClick={() => setShowMenu(prev => !prev)}>
            <i className='bx bx-grid-alt'></i>
        </div>
    </nav>
  )
}

export default Navbar