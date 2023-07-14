import '../styles/Education.css'

const Education = () => {
  return (
    <div className='education section' id='education'>
        <h2 className="section-title">Education</h2>

        <div className="education__container bd-grid">
            <div className="education__content">
                <div className="education__time">
                    <span className="education__rounder"></span>
                    <span className="education__line"></span>
                </div>

                <div className="education__data bg-grid">
                    <h3 className="education__title">Mecatronica</h3>
                    <span className="education__studies">BUAP</span>
                    <span className="education__year">2016</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Education