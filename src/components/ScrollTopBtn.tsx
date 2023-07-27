import { useEffect, useState } from 'react'
import '../styles/ScrollTopBtn.css'

const ScrollTopBtn = () => {

    const [showScrollTopBtn, setShowScrollTopBtn] = useState(false)

    useEffect(() => {
        const scrollTop = () => {
            document.documentElement.scrollTop >= 200 ? setShowScrollTopBtn(true) : setShowScrollTopBtn(false)
        }

      window.addEventListener('scroll', scrollTop)
    
      return () => {
        window.removeEventListener('scroll', scrollTop)
      }
    }, [])

  return (
    <a href='#' className={`scrolltop ${showScrollTopBtn && 'show-scroll'}`}>
        <i className="bx bx-up-arrow-alt scrolltop__icon"></i>
    </a>
  )
}

export default ScrollTopBtn