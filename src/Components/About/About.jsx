
import './about.css'
import about_img from '../../Assest/about.png'
import play_img from '../../Assest/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about_img' />
        <img src={play_img} alt="" className='play_img' />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nuturing Tommoro&apos;s Leaders Today</h2>

        <p>1. Luminary Education Luminary Education offers personalized 
          tutoring and consultancy services, focusing on academic support,
           exam preparation, and school placements for students of all ages and 
           abilities. Their services include assisting students in finding suitable 
           educational institutions and providing ongoing support throughout their 
           academic journeys. </p>

        <p>2. Luminate Education Group Based in Yorkshire, England, Luminate Education Group encompasses several secondary, further, 
          and higher education institutions. Formerly known as Leeds City College Group, it was renamed 
          in December 2018 to reflect its expanding portfolio. The group includes institutions such as 
          Leeds City College, Harrogate College, Keighley College, Leeds Sixth Form College, Leeds
          Conservatoire, and University Centre Leeds</p>
      </div>
    </div>
  )
}

export default About