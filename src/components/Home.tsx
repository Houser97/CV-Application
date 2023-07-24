import { HOME_INFORMATION } from '../assets/constants'
import '../styles/Home.css'
import Cheems from '../assets/Cheems.jpg'

const Home = () => {
  return (
    <div className='home' id='home'>
        <div className="home__container section bd-grid">
            <div className="home__data bd-grid">
                <img src={Cheems} alt="profile" className="home__img" />

                <h1 className="home__title">Arturo <b>Rivera</b></h1>
                <h3 className="home__profession">Full-Stack Developer</h3>

                <div>
                    <a href="" className="home__button-movil">Download</a>
                </div>
            </div>

            <div className="home__address bd-grid">
                {
                    HOME_INFORMATION.map(({data, svg}) => {
                        return(
                            <span className="home__information" key={`home-${svg}`}>
                                <i className={`bx bx-${svg} home__icon`}></i> {data}
                            </span>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Home