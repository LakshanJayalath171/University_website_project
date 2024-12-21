import './hero.css'
import darkarrow from '../../Assest/dark-arrow.png';

const Hero = () => {
  return (
    <div className='hero containeer'>
      <div className='hero_text'>
        <h1>Empowering minds, shaping futures—where knowledge meets innovation.</h1>
        <p>Luminary College is a distinguished higher education institution dedicated to providing comprehensive and personalized academic programs.</p>
        <button className='btn'>Explore <img src={darkarrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero