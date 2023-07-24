const Experience = () => {
  return (
    <div className='experience section' id='experience'>
        <h2 className="section-title">Experience</h2>

        <div className="experience__container bf-grid">
            <div className="experience__content">
                <div className="experience__time">
                    <span className="experience__rounder"></span>
                    <span className="experience__line"></span>
                </div>

                <div className="experience__data bd-grid">
                    <h3 className="experience__title">Engineer Projects Jr</h3>
                    <span className="experience__company">From 2022 to current | Econ Tech</span>
                    <p className="experience__description">Ignition</p>
                </div>
            </div>

            <div className="experience__content">
                <div className="experience__time">
                    <span className="experience__rounder"></span>
                    <span className="experience__line"></span>
                </div>

                <div className="experience__data bd-grid">
                    <h3 className="experience__title">Engineer Projects Jr</h3>
                    <span className="experience__company">From 2022 to current | Econ Tech</span>
                    <p className="experience__description">Ignition</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience