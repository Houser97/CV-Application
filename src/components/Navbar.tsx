import { NAV_ITEMS } from '../assets/constants'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <a href="#" className="nav__logo">Arturo</a>

        <div className="nav__menu">
            <ul className="nav__list">
                {NAV_ITEMS.map(({item, svg}, index) => {
                    return(
                        <li className="nav__item" key={`nav-item-${index}`}>
                            <a href="#" className="nav__link">
                                <i className={`bx bx-${svg}`}></i> {item}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar