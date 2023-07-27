import Certificates from '../Certificates'
import Experience from '../Experience'
import Interests from '../Interests'
import Languages from '../Languages'
import Refererences from '../Refererences'

const ResumeRight = () => {
  return (
    <div className='resume__right'>
      <Experience />
      <Certificates />
      <Refererences />
      <Languages />
      <Interests />
    </div>
  )
}

export default ResumeRight