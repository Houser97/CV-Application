import '../styles/Certificates.css'

const Certificates = () => {
  return (
    <div className='certificate section' id='certificates'>
        <h2 className="section-title">Certificates</h2>

        <div className="certificate__container bd-grid">
            <div className="certificate__content">
                <h3 className="certificate__title">C1 Cambridge</h3>
                <p className="certificate__description">English Certification</p>
            </div>
            <div className="certificate__content">
                <h3 className="certificate__title">A2 Goethe</h3>
                <p className="certificate__description">German Certification</p>
            </div>
        </div>
    </div>
  )
}

export default Certificates