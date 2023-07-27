import '../styles/Languages.css'

const Languages = () => {
  return (
    <div className='languages section'>
        <h2 className="section-title">Languages</h2>

        <div className="laguages__container">
            <ul className="languages__content bd-grid">
                <li className="languages__name">
                    <span className="languages__circle"></span> Spanish
                </li>
                <li className="languages__name">
                    <span className="languages__circle"></span> English
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Languages