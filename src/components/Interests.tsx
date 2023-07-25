import { INTERESTS } from '../assets/constants'
import '../styles/Interests.css'

const Interests = () => {
  return (
    <div className='interests section'>
        <h2 className="section-title">Interests</h2>

        <div className="interests__container bd-grid">
            {
                INTERESTS.map(({interest, svg}) => {
                    return(
                        <div className="interests__content" key={interest}>
                            <i className={`bx ${svg} interests__icon`}></i>
                            <span className='interests__name'>{interest}</span>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Interests