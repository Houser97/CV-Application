import { SOCIAL } from '../assets/constants'
import '../styles/Social.css'

const Social = () => {
  return (
    <div className='social section'>
        <h2 className="section-title">SOCIAL</h2>

        <div className="social__container bg-grid">
            {
                SOCIAL.map(({social, svg}) => {
                    return(
                        <a href="" className="social__link social__icon" key={`social-${social}`}>
                            <i className={`bx bxl-${svg}`}></i> {social}
                        </a>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Social