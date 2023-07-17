import '../../styles/Resume/ResumeLeft.css'
import Education from '../Education'
import Home from '../Home'
import Profile from '../Profile'
import Skills from '../Skills'
import Social from '../Social'

const ResumeLeft = () => {
  return (
    <div className='resume__left'>
        <Home />
        <Social />
        <Profile />
        <Education />
        <Skills />
    </div>
  )
}

export default ResumeLeft