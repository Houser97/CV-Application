import { NAV_ITEMS } from '../assets/constants'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <a href="#" className="nav__logo">Arturo</a>

        <div className="nav__menu navbar-main">
            <ul className="nav__list">
                {NAV_ITEMS.map(({item, svg}, index) => {
                    return(
                        <li className="nav__item nav__icon" key={`nav-item-${index}`}>
                            <a href="#" className="nav__link">
                                <i className={`bx bx-${svg}`}></i> {item}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>

        <div className="nav__toggle">
            <i className='bx bx-grid-alt'></i>
        </div>
    </nav>
  )
}

export default Navbar